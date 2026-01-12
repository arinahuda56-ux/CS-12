import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import classes from './post.module.css'; 
 
export const Post = (props) => { 
    const { id, title } = props; 
    const navigate = useNavigate(); 
 
    const handleOpenClick = () => { 
        navigate(`/posts/${id}`); 
    }; 
 
    return ( 
        <div className={classes.container}> 
            <div className={classes.title}>{title.length > 40 ? title.slice(0, 40) + '...' : title}</div> 
            <button className={classes.open_btn} onClick={handleOpenClick}> 
                open 
            </button> 
        </div> 
    ); 
};