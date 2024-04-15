import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Dhanush.</h1>
                <p>If there any queries hit me! </p>
            </div>
            
            <div className="footer-top-right">
                <div className="social">
                <h4>Social Media<i class='bx bx-chevrons-right'></i></h4>
                </div>
                <a href='https://www.linkedin.com/in/dhanush-s-7ba230277/' target='_blank'><i class='bx bxl-linkedin-square'></i></a>
                <a href='https://github.com/DhanushUser' target='_blank'><i class='bx bxl-github' ></i></a>
                
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2023 Dhanush. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer