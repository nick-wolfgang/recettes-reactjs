import React from 'react'
import fm1 from './fm1.png';
import avatarPic from './avatarPic.jpg';
import './Post.css';
import Avatar from '@mui/material/Avatar';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({username, caption, profilePic, postImage}) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar 
                    className='post__avatar'
                    alt='NickBrice'
                    src={profilePic}
                />
                <h3>{username}</h3>
            </div>
            
            <img 
                className='post__image'
                src={postImage}
                alt='postImg' 
            />
            <h4 className='post__text'><strong>Wolfgang</strong> {caption} </h4>
        </div>
    )
}

export default Post
