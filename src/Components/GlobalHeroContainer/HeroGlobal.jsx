import React,{useRef} from 'react'
import '../GlobalHeroContainer/HeroGlobal.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function HeroGlobal({title,heading,img}) {
   const heroGlobalRef =useRef();
      useGSAP(()=>{
          let tl = gsap.timeline({ease: "power3.inOut"});
          tl.from(".animateHero ",{
                          opacity:0,
                          rotateX:50,
                          translateY:-15,
                          translateZ:50,
                          duration:2,
                          scale:1.1,
                          delay:.2
                          } )
          tl.from(".animateHero1",{opacity:0,scale:.5},"-=.5s")
      });
  return (
    <div
    container="universal"
    className='heroGlobal'
    ref={heroGlobalRef}
    >
        <div>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921955/demo-elearning-06_brpbk5.webp" alt="" />
        </div>
        <div className='animateHero'>
            <h2 >{title}</h2>
            <h1 >{heading}</h1>
        </div>
        <div className='animateHero1'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default HeroGlobal