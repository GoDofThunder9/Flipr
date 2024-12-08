import React from 'react';
import '../assets/Style/banner.css';
import banner from '../assets/Images/Images/banner.svg'
import Form from './form';
function Banner(){
  return (
    <div className='banner'>
      <>
      <div>
        <div className='FORM'>
          <Form/>
        </div>
       <img src={banner} alt="cantLoad"/>
       <div className='tag'>
       Consultation,
       Design,& Marketing
       </div>
      </div>
      </>
    </div>
  )
}

export default Banner
