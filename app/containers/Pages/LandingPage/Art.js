import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArtItem from './ArtItem';
import './index.css';

const Art = () => {
  const history = useHistory();
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      console.log('Token đã được lưu:', token);
      // Redirect to login if token is not available
      return;
    }
    else {
      // Token chưa được lưu
      console.log('Token chưa được lưu');
    }
    // Gửi yêu cầu GET đến API để lấy danh sách các tác phẩm nghệ thuật
    fetch('http://localhost:8080/api/v1/auth/random', {
      headers: {
        Authorization: `Bearer ${token}` // Thêm token Authorization vào header
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch artworks');
        }
        return response.json();
      })
      .then(data => {
        setArtList(data);
      })
      .catch(error => {
        console.error('Error fetching art list!', error);
      });
  }, [history]);

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
          <h3>No artworks available!</h3>
        )}
      </div>
    </div>
  );
}

export default Art;
