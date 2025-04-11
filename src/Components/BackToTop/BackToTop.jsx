import React, { useEffect, useState } from 'react'
import { BsRocketTakeoff } from "react-icons/bs";
import '../BackToTop/BackToTop.css'

function BackToTop() {
  const [scrollTop,setSrollTop] = useState(false);
     useEffect(()=>{
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
              setSrollTop(true);
            } else {
                setSrollTop(false);
            }
          };
      
          window.addEventListener("scroll", toggleVisibility);
      
          return () => window.removeEventListener("scroll", toggleVisibility);
    },[])
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scrolling
        });
      };
  return (
    <div className='backTop'>
   {scrollTop && (
        <button
          onClick={scrollToTop}
        >
         <span>
         <BsRocketTakeoff />
         </span>
        </button>
      )}
    </div>
  )
}

export default BackToTop