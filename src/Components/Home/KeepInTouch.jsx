import React,{useRef} from 'react'
import '../Home/KeepInTouch.css'
import { FaRegEnvelope } from "react-icons/fa6";
import { FiThumbsUp } from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

function KeepInTouch() {
   const keepInTouch=useRef();
    useGSAP(()=>{
          let tl =gsap.timeline({
              scrollTrigger:{
                trigger:keepInTouch.current,
                // markers:true,
                start:"top center",
                end:"bottom center",
              //   scrub:true
              }
             },{ease:"elastic.in(1,0.3)"});
             tl.from(".keepInTouch1",{opacity:0,scale:.5,x:"-400"})
             tl.from(".keepInTouch2",{opacity:0,scale:.5,x:"400"})        
           }
          )
  return (
    <div className='keepInTouch' ref={keepInTouch}>
      <div className='keepInTouch1'>
        <span><FaRegEnvelope /></span>
        <span>looking for help? </span>
        <a href=""><span>Contact us today</span></a>
      </div>
      <div className='keepInTouch2'>
        <span><FiThumbsUp /></span>
        <span>Keep in Touch. </span>
        <a href="">
          <span>Like us on Facebook</span>
        </a>
      </div>
    </div>
  )
}

export default KeepInTouch