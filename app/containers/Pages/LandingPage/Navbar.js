import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../../api/images/logo_img.png';
import './index.css';
import axios from 'axios';

const Navbar = () => {
    const [input, setInput] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/creator/artworks/search")
            .then(response => {
                const data = response.data;
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching search result!', error);
            });
    }, [])

    return (
        <div className='navbar-section'>
            <div className='navbar-logo'>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className='navbar-link'>
                <Link to="/">Artists</Link>
                <Link to="/">Drawing Prompts</Link>
                <Link to="/">Marketplace</Link>
            </div>
            <div className='search-bar'>
                <SearchIcon id='search-icon' />
                <input
                    placeholder='Type your artwork...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className="login-signup">
                <Link to="/login">
                    <button type="button">LOGIN</button>
                </Link>
                <Link to="/register">
                    <button type="button">SIGN UP</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar