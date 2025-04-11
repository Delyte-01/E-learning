import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Logo from './Logo'
import '../Header/Header.css'
import { RiMenu2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi"; 



function Header() {


    const [visibility,setVisibility]=useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
      const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsScrolled(true);
        console.log("true")
      } else {
        setIsScrolled(false);
        console.log("false")
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    },[])

    const handleToggle=()=>{
      setVisibility(!visibility)
      console.log("hello visible")
    }

  return (
    
    <div className={` header ${isScrolled ? "scrolled" : ""} `} 
    container="universal" >
        <div className='animate'>
            <Logo />
        </div>
        <div >
            <Nav
            handleToggle={handleToggle}
            visibility={visibility}
            isScrolled={isScrolled}
            />
        </div>
        <div className='animate'>
          <div>
            <span>
             <FiPhoneCall />
              </span>
            <p>+234 81397 60048</p>
          </div>
          <div>
            <span onClick={handleToggle}>
              <RiMenu2Line />
            </span>
          </div>
        </div>
        <div className={`over-lay ${visibility ? "show":""}`}
        onClick={handleToggle}
        ></div>
        
    </div>
  )
}

export default Header