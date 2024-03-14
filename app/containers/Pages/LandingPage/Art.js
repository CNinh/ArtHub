import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ArtItem from './ArtItem';
import './index.css'
const Art = () => {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/random')
      .then(response => {
        const data = response.data;
        setArtList(data);
      })
      .catch(error => {
        console.error('Error fetching art list!', error);
      });
  }, []);

  return (
    <div className='art-section'>
      <h1 className='title'>Gallery</h1>
      <div className='art-list'>
        {artList && artList.length > 0 ? (
          artList.map((artItem, index) => (
            <ArtItem
              key={index}
              item={artItem}
            />
          ))
        ) : (
          <h3>No artworks available!</h3 >
        )}
      </div>
    </div>
  );
}

export default Art