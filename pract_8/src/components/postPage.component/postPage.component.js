import { useEffect, useState } from "react" 
import { useParams, useNavigate } from "react-router-dom" 
import { getPost, getAuthor } from '../../services/blogService' 
import classes from './postPage.module.css' 
 
export const PostPage = () => { 
    const { postId } = useParams() 
    const [data, setData] = useState(null) 
    const navigate = useNavigate() 
 
    useEffect(() => { 
        getPost(postId).then(async (post) => { 
            if(!post) return navigate('/page-404') 
            const author = await getAuthor(post.userId) 
            setData({ ...post, author }) 
        }) 
    }, [postId, navigate]) 
 
    if (!data) return <div className={classes.container}>Завантаження статті...</div> 
 
    return ( 
        <div className={classes.container}> 
            <button className={classes.back_btn} onClick={() => navigate(-1)}>← Назад</button> 
             
            <div className={classes.post_card}> 
                <h1 className={classes.title}>{data.title}</h1> 
                <div className={classes.author_name}>Автор: {data.author.name}</div> 
                <div className={classes.content}> 
                    {data.body} 
                </div> 
            </div> 
        </div> 
    ) 
}