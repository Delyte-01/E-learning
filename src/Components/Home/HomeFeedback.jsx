import React,{useRef} from 'react'
import '../Home/Homefeedback.css'
import { LuMessageCircleMore } from "react-icons/lu";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeedBackslick from './FeedBackslick';


gsap.registerPlugin(useGSAP,ScrollTrigger);




function HomeFeedback() {
   const homeFeedbackRef=useRef();
    useGSAP(()=>{
      let tl =gsap.timeline({
          scrollTrigger:{
            trigger:homeFeedbackRef.current,
            // markers:true,
            start:"top center",
            end:"bottom center",
            // scrub:true
          }
         },{ease: "power4.out"});
         tl.from(".animateFeedback1",{opacity:0,scale:.5})
         tl.from(".animateFeedback2",{opacity:0,scale:.5})
         tl.from(".animateFeedback3",{opacity:0,scale:.5})
         tl.from(".animateFeedback4",{opacity:0,scale:.5})
         tl.from(".animateFeedback5",{opacity:0,scale:.5})
         tl.from(".animateFeedback6",{opacity:0,scale:.5})
         tl.from(".animateFeedback7",{opacity:0,scale:.5})
         tl.from(".animateFeedback8",{opacity:0,scale:.5})
         tl.from(".animateFeedback9",{opacity:0,scale:.5})
         tl.from(".animateFeedback10",{opacity:0,scale:.5})
         tl.from(".animateFeedback11",{opacity:0,scale:.5})
         tl.from(".animateFeedback12",{left:-400,scale:.5,width:0,duration:4,overflow:"hidden"})

        }
      )
  return (
    <div container="universal" className='feedBack' ref={homeFeedbackRef}>
     <div >
      <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1735282929/demo-elearning-bg-05_1_xgpztr.png" alt="" />
     </div>
     <div>
        <div>
              <div>
                <span className='animateFeedback1'><LuMessageCircleMore /></span>
                <p className='animateFeedback2'>Students feedback</p>
              </div>
              <div  className='animateFeedback3'>
                <h1>Trusted by genius people.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis dictum nec.</p>
              </div>
              <div>
                <span className='animateFeedback4'>99%</span>
                <p className='animateFeedback5'>Student's complete course successfully.</p>
              </div>
        </div>
         <div className='animateFeedback6'>
        < FeedBackslick />
         </div>
     </div> 
     <div>
        <div className='animateFeedback7'>
          <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921956/xhgkxmeaqbcuf9rx3yrm.svg" alt="" /></div>
        <div className='animateFeedback8'>
          <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921956/logo-logitech-white_al3mo7.svg" alt="" /></div>
        <div className='animateFeedback9'>
          <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921956/logo-invision-white_rmosd5.svg" alt="" /></div>
        <div className='animateFeedback10'>
          <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921955/logo-yahoo-white_d7hjw4.svg" alt="" /></div>
        <div className='animateFeedback11'>
          <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921955/logo-monday-white_ysvlat.svg" alt="" />
        </div>
     </div>
     <div className='animateFeedback12'>
      <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1735296925/demo-elearning-border_do4eqj.jpg" alt="" />
     </div>
       
    </div>
  )
}

export default HomeFeedback