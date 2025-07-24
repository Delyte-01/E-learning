import React, { useRef } from 'react'
import '../Home/Hero.css'
import { FiThumbsUp } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import Atropos from 'atropos/react';
import '../Home/atropos.min.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

function Hero() {
    const heroRef =useRef();
    useGSAP(()=>{
        let tl = gsap.timeline({ease: "power4.in"});
        tl.from(".animate ",{
                        opacity:0,
                        rotateY:90,
                        rotationZ:-10,
                        translateY:80,
                        translateZ:50,
                        duration:1,
                        delay:.5
                        } )
        tl.from(".animate1",{opacity:0,scale:.5})
        tl.from(".animate2",{opacity:0,scale:.5})
        tl.from(".animate3",{opacity:0,scale:.5})
        tl.from(".animate4",{opacity:0,scale:.5})
        tl.from(".animate5",{opacity:0,scale:.5})
        tl.from(".animate6",{opacity:0,scale:.5})
        tl.from(".animate7 ",{
            opacity:0,
            rotateY:-90,
            rotationZ:10,
            translateY:-80,
            translateZ:-50,
            duration:1,
            } ,"-=2.3")
            

    });
    console.log('hello')
  return (
    <div className='hero'
    container="universal"
    ref={heroRef}
    >
        <div className='heroImg'>
        </div>
        <div className='heroo animate8'>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921955/demo-elearning-06_brpbk5.webp" alt="" />
        </div>
        <div className='hero-divOne '>
            <div>
                <h1 className='animate'>Best online platform for education.</h1>
                <p className='animate1'>Online courses from the world's leading experts. Join 17 million learners today</p>
            </div>
            <div>
                <div className='divBtn animate2'>
                    <span className='svg'>
                        <FiThumbsUp />
                    </span>
                    <span data-text="get started" class="btn-double">
                    Get started
                    </span>
                </div>
                    
                <div className='animate3'>
                    <span className='svg'>
                        <MdOutlineOndemandVideo />
                    </span>
                  <span>How it works</span>
                </div>
            </div>
            <div>
                <div className='animate4'>
                    <span>260+</span>
                    <span>tutors</span>
                </div>
                <div className='animate5'>
                    <span>5340+</span>
                    <span>students</span>
                </div>
                <div className='animate6'>
                    <span>280+</span>
                    <span>courses</span>
                </div>
            </div>
            
        </div>
        <div className='hero-divTwo animate7'>
            <Atropos
            className='my-atropos'
              shadow={false} 
            >      
              <div>
                    <div className='atropos-offset'>
                        <img 
                        data-atropos-offset="-5"
                        src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733922160/demo-elearning-hero-banner-01_bpq6ie.webp" alt="" />
                    </div>
                    <div className='atropos-offset'>
                        <img 
                         data-atropos-offset="5"
                        src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921966/demo-elearning-hero-banner-02_fzd7vw.webp " alt="" />
                    </div>
                </div>
            </Atropos>
        </div>
    </div>
  )
}

export default Hero