import React, { useState } from 'react'
import '../Header/Nav.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaLaptop } from "react-icons/fa6";
import { BiBriefcase } from "react-icons/bi";
import { BsVectorPen } from "react-icons/bs";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';



function Nav({handleToggle,visibility,isScrolled}) {

     useGSAP(()=>{
        let mm = gsap.matchMedia();
        mm.add("(min-width: 955px)", () => {
            gsap.from(".nav-animate .nav-item",{y:-80,stagger:.2,duration:.5})
          });
     })
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open)
        console.log("cheers")
    }
  return (
    <div className={`nav ${visibility ? "nav-open" :""}`} >
        <div className="navbar-clone">
            <div className="nav-inside">
               <div className="nav-container">
                <ul className="navbar-list nav-animate">
                    <li className='nav-item'>
                    <a >
                        <Link className="nav-link" to="/">Home</Link>
                        </a>
                        </li>
                    <li className='nav-item'>
                      
                        <Link className="nav-link" to="/about"><a >About </a></Link>
                        </li>
                    <li className='nav-item nav-itemPlus'> 
                        <div
                        onClick={handleOpen}>
                        <a >
                        <Link className="nav-link" to="#">Courses</Link>
                        </a>
                        <span  className='drop-svg cursor'>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                    </div>
                    <div className='drop-downDiv'>
                        <ul className={`dropDown-menu ${open ? "drop-open" :""}`}>
                            <div className='dropIn'>
                            <li>
                                <a href="#">
                                    <span>
                                         <FaLaptop />
                                    </span>
                                    <div className="submenuIcon-content">
                                        <span>Development</span>
                                        <p>Develop professional skills</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <BiBriefcase />
                                    </span>
                                    <div className="submenuIcon-content">
                                        <span>Develop professional skills</span>
                                        <p>Advance your business</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <BsVectorPen />
                                    </span>
                                    <div className="submenuIcon-content">
                                        <span>Design</span>
                                        <p>Design skills & concepts</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <BsFillMegaphoneFill />
                                    </span>
                                    <div className="submenuIcon-content">
                                        <span>Marketing</span>
                                        <p>New age marketing skills</p>
                                    </div>
                                </a>
                            </li>
                            </div>
                           
                        </ul>
                    </div>            
                        </li>
                    <li className='nav-item'>
                         <a >
                        <Link className="nav-link" to="#">Instructors</Link>
                        </a>
                        </li>
                    <li className='nav-item'>
                    <a >
                        <Link className="nav-link" to="#">Testimonial</Link>
                        </a>
                        </li>
                    <li className='nav-item'>
                         <a >
                        <Link className="nav-link" to="#">Blog</Link>
                        </a>
                        </li>
                    <li className='nav-item'>
                         <a >
                        <Link className="nav-link" to="/contact">contact</Link>
                        </a>
                        </li>
                </ul>
                <div className='close-menu'>
                    <span onClick={handleToggle}>
                        <IoCloseSharp />
                    </span>
                </div>
               </div>
            </div>

        </div>
    </div>
  )
}

export default Nav