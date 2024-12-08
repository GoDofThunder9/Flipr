import React from 'react'
import './Footer.css'
import footerImg from '../assets/Images/Images/Rectangle.svg'
import logo from '../assets/Images/Images/logo.svg'
import twitter from '../assets/Images/Icons/Group-1.svg'
import insta from '../assets/Images/Icons/Group.svg'
import linkedin from '../assets/Images/Icons/Linkedin.svg'

const Footer = () => {
  return (
    <div className="ParentDiv">

      {/* Image section  */}
      <div className="image">
        <img src={footerImg} alt="" className='lastimg'/>

        <div className="overlayContent">
            <p>
                Learn more about our listing process, as well as our additional staging and design work.
            </p>
            <button className="ctaButton">LEARN MORE</button>
        </div>
      </div>

      {/* News letter section  */}
      <div className="newsletter">
        <div className="left-section">
            <span>Home</span>
            <span>Services</span>
            <span>Project</span>
            <span>Testimonials</span>
            <span>Contact</span>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>

      {/* Black bar logo section */}
      <div className="Blackfooter">
        <div>
            <img src={logo} alt="" className="logoImg"/>
        </div>

        <div className='socialMediaImages'>
            <img src={twitter} alt="" className="twitter" />
            <img src={insta} alt="" className="insta" />
            <img src={linkedin} alt="" className="linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Footer
