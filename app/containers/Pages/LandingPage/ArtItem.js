import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ArtDetail from '../Forms/ArtDetail';

const ArtItem = (props) => {
    const { artworkId, artworkName, artist, artworkUrl, postedAt, likeCount, commentCount } = props.item;
    const [isPopup, setIsPopup] = useState(false);
    // const [artwork, setArtwork] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/v1/creator/find/{artworkId}')
    //     .then(response => {
    //         const data = response.data;
    //         setArtwork(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching art!', error);
    //     });
    // }, []);

    return (
        <div className='art-item'>
                <div className='card-top' onClick={handleOpen}>
                    <h1>{artist}</h1>
                </div>
                <div className='card-middle'>
                    <div>
                        <img src={artworkUrl} style={{ width: '100%', height: '250px', padding: '20px' }} />
                    </div>
                    <p>Public Date: {postedAt}</p>
                </div>
                <hr className='hr-line' />
                <div className='card-bottom'>
                    <ul>
                        <li><ThumbUpIcon /> {likeCount}</li>
                        <li><ChatBubbleIcon /> {commentCount}</li>
                    </ul>
                </div>
        </div>
    );
}

export default ArtItem