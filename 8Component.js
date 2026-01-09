import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuthors, getPostsByAuthorId } from "../../services/blogService"
import { Loader } from "../loader.component/loader.component"
import classes from "./authors.module.css"

export const AuthorsComponent = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const load = async () => {
            const authorsData = await getAuthors()
            const result = await Promise.all(
                authorsData.map(async author => ({
                    ...author,
                    posts: await getPostsByAuthorId(author.id)
                }))
            )
            setAuthors(result)
            setLoaded(true)
        }
        load()
    }, [])

    if (!loaded) return <Loader isLoaded={false} />

    return (
        <div className={classes.container}>
            <h2>Authors page</h2>

            {authors.map(author => (
                <div key={author.id} className={classes.author}>
                    <div className={classes.info}>
                        <div className={classes.avatar}></div>
                        <div>
                            <div>{author.name}</div>
                            <div>{author.email}</div>
                            <div>{author.phone}</div>
                        </div>
                    </div>

                    <div className={classes.posts}>
                        {author.posts.map(post => (
                            <div key={post.id} className={classes.post}>
                                <div>{post.title.slice(0, 20)}...</div>
                                <button onClick={() => navigate(`/posts/${post.id}`)}>
                                    open
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
