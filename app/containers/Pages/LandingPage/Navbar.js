import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../api/images/logo_img.png';
import './index.css';

const Navbar = () => {
    return (
        <div className='navbar-section'>
            <div className='navbar-logo'>
                <Link to ="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className='navbar-link'>
                <Link to="/">Arts</Link>
                <Link to="/">Artists</Link>
                <Link to="/">Drawing Prompts</Link>
                <Link to="/">Marketplace</Link>
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