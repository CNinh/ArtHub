import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const ArtItem = ({ artist, art, publicDate, view, like, comment }) => {
    return (
        <div className='art-item'>
            <div className='card-top'>
                <h1>{artist}</h1>
            </div>
            <div className='card-middle'>
                <div style = {{backgroundImage: `url(${art})`, backgroundSize: 'cover', width: '100%', height: '200px'}}></div>
                <p>Public Date: {publicDate}</p>
            </div>
            <hr className='hr-line'/>
            <div className='card-bottom'>
                <ul>
                    <li><VisibilityIcon /> {view}</li>
                    <li><ThumbUpIcon /> {like}</li>
                    <li><ChatBubbleIcon /> {comment}</li>
                </ul>
            </div>
        </div>
    )
}

export default ArtItem