import React from 'react'

const ArtDetail = ({item, handleClose}) => {
    const { artist, artworkUrl, postedAt, likeCount, commentCount } = item;

  return (
    <div className='artDetail'>
        <div className='artDetail-content'>
            <button className='close-btn' onClick={handleClose}Close></button>
            <h2>{artist}</h2>
            <img src={artworkUrl} alt={artist} />
        </div>
    </div>
  )
}

export default ArtDetail