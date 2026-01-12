import React, { useState, useEffect } from 'react'; 
import { getAuthors, getPostsByAuthorId } from '../../services/blogService'; 
import { Post } from '../post.component/post.component'; 
import classes from './allPosts.module.css'; 
 
export const AuthorsComponent = () => { 
  const [authors, setAuthors] = useState([]); 
  const [authorPosts, setAuthorPosts] = useState({}); 
 
  useEffect(() => { 
    getAuthors().then(data => setAuthors(data)); 
  }, []); 
 
  const fetchPosts = async (authorId) => { 
    const posts = await getPostsByAuthorId(authorId); 
    setAuthorPosts(prev => ({ ...prev, [authorId]: posts })); 
  }; 
 
  return ( 
    <div className={classes.authors_page}> 
      <h1 style={{fontWeight: 'normal', marginBottom: '20px'}}>Authors page</h1> 
      {authors.map(author => ( 
        <div key={author.id} className={classes.author_row}> 
           
          <div className={classes.author_info_block}> 
            <div className={classes.avatar}></div> 
            <div style={{fontSize: '0.8rem'}}> 
              <strong>{author.name}</strong><br/> 
              {author.email}<br/> 
              {author.phone} 
            </div> 
          </div> 
 
          <div className={classes.posts_scroll_container}> 
            {authorPosts[author.id] ? ( 
              authorPosts[author.id].map(post => ( 
                <Post key={post.id} {...post} /> 
              )) 
            ) : ( 
              <button  
                onClick={() => fetchPosts(author.id)} 
                style={{background: 'none', border: '1px solid white', color: 'white', borderRadius: '15px', padding: '10px 20px', cursor: 'pointer'}} 
              > 
                open list 
              </button> 
            )} 
          </div> 
 
        </div> 
      ))} 
    </div> 
  ); 
}; 
 
export const AllPostsComponent = () => null;