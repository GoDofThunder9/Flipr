import React from 'react';
import  '../assets/Style/Navbar.css';
import Logo from '../assets/Images/Images/logo.svg'
import Banner from './Banner';
import OurProjectComponent from './OurProjectComponent';
import Footer from  './Footer'
function Navbar() {
  return (
    <>
    <div className='Navbar'>
       <div className='img1'> <img src={Logo}  alt="not loaded" /></div>
       <div className='Navsection'>
         <a href="#">HOME</a>
         <a href="#">SERVICES</a>
         <a href="#">ABOUT PROJECT</a>
         <a href="#">TESTIMONIAL</a>
       </div>
       <button className='Button1'> CONTACT</button>
    </div>
    <Banner/>
    <OurProjectComponent/>
    <Footer/>
    </>
  )
}

export default Navbar
