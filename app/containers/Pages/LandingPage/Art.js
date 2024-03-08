import React, { useEffect, useState } from 'react'
import { ArtList } from '../Forms/ArtList';
import ArtItem from './ArtItem';
import './index.css'

const Art = () => {
  return (
    <div className='art-section'>
      <h1 className='title'>Gallery</h1>
      <div className='art-list'>
        {ArtList.map((artItem, key) => (
          <ArtItem
            key={key}
            artist={artItem.artist}
            art={artItem.Art}
            publicDate={artItem.publicDate}
            view={artItem.view}
            like={artItem.like}
            comment={artItem.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default Art