import React from 'react'
import '../Header/Logo.css'

function Logo() {
  return (
    <div className='logo '>
        <img 
        className='logoImgWhite'
        src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921966/demo-elearning-logo-white_ttrm5l.webp" alt="" />
        <img 
        className='logoImgBlack'
        src="https://res.cloudinary.com/dk5mfu099/image/upload/v1734429637/demo-elearning-logo-black_m7wc8a.webp" alt="" />
    </div>
  )
}

export default Logo