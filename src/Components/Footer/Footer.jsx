import React from 'react'
import "../Footer/Footer.css"
import { FiPhoneCall } from "react-icons/fi";
import { LuThumbsUp } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";


function Footer() {
    const day = new Date().getFullYear();

  return (
    <div className='footer' container="universal">
        <div>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1735282929/demo-elearning-bg-05_1_xgpztr.png" alt="" />
        </div>
        <div>
            <div>Admission is open for the next year batch</div>
            <div>
                <div className='divBtn '>
                       <span data-text="Get started now" class="btn-double">
                                            Get started now
                                        </span>
                                        <span >
                                        <LuThumbsUp />
                                        </span>
                </div>
                <div>
                    <span><FiPhoneCall /></span>
                    <span>+234 8139760048</span>
                </div>
            </div>
        </div>
        <div>
             <div>
                <div>
                    <img 
                    src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921966/demo-elearning-logo-white_ttrm5l.webp" alt="" />
                </div>
                <h2>We are providing high-quality courses for about ten years.</h2>
                <dibs>
                    <span>fb.</span>
                    <span>lg.</span>
                    <span>tw.</span>
                    <span>be.</span>
                </dibs>
             </div>
             <div>
                <h2>Popular Courses</h2>
                <ul>
                    <li><a href="">business finance</a></li>
                    <li><a href="">advance design</a></li>
                    <li><a href="">web development</a></li>
                    <li><a href="">data visualization</a></li>
                </ul>
             </div>
             <div>
                <h2>Need help?</h2>
                <p>call us directly?</p>
                <div>+234 8139760048 <span>free</span></div>
                <p>need support?</p>
                <h3>help@domain.com</h3>
             </div>
             <div>
                <h2>Subscribe our newsletter</h2>
                <divv>
                    <input  type="email" placeholder='Enter your email...' required />
                    <button type='submit'>submit <span><FiArrowRight /></span></button>
                </divv>
                <div>
                        <span><FaRegHandshake /></span>
                        <p>Protect your privacy</p>
                    </div>
             </div>
        </div>
        <div>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">courses</a></li>
                <li><a href="">instructors</a></li>
                <li><a href="">testimonial</a></li>
                <li><a href="">blog</a></li>
                <li><a href="">contact</a></li>
            </ul>
            <section>
                &copy;
                <span>{day}</span>
                crafto is proudly powered by 
                <span>ThemeZaa</span>
            </section>
        </div>
    </div>
  )
}

export default Footer