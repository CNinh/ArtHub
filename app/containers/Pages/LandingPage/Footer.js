import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import './index.css'

export const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-name'>
        <p> &copy; 2024 ArtHub</p>
      </div>
      <div className='social-media'>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  )
}

export default Footer