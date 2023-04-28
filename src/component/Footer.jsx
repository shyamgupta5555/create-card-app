import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
    <footer>
      <div>
        <h1>Order <strong>Now</strong></h1>
        <p> @all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div className='link'>
       <FacebookIcon ></FacebookIcon>
       <YouTubeIcon></YouTubeIcon>
       <GitHubIcon></GitHubIcon>

        </div>
      </div>
    </footer>
  )
}