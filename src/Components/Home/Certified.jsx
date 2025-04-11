import React,{useRef} from 'react'
import '../Home/Certified.css'
import { GrCertificate } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CgMouse } from "react-icons/cg";


gsap.registerPlugin(useGSAP,ScrollTrigger);


function Certified() {
    const certifiedContentRef=useRef();
  useGSAP(()=>{
    let tl =gsap.timeline({
        scrollTrigger:{
          trigger:certifiedContentRef.current,
        //   markers:true,
          start:"top center",
          end:"bottom center",
          
        //   scrub:true
        }
       },{ease:"elastic.in(1,0.3)"});
       tl.from(".animateCertify1",{opacity:0,scale:.5})
       tl.from(".animateCertify2",{opacity:0,scale:.5})
       tl.from(".animateCertify3",{opacity:0,scale:.5})
       tl.from(".animateCertify4",{opacity:0,scale:.5})
       tl.from(".animateCertify5",{opacity:0,scale:.5})
       tl.from(".animateCertify6",{opacity:0,scale:.5})
       tl.from(".animateCertify7",{opacity:0,scale:.5})
       tl.from(".animateCertify8",{opacity:0,scale:.5,translateX:-10,translateY:20},"-=2")
       tl.from(".animateCertify9",{opacity:0,scale:.5,translateX:-10,translateY:20},"-=1.5")
       tl.from(".animateCertify10",{opacity:0,scale:.5,translateX:-10,translateY:20},"-=1")

      }
    )
  return (
    <div container="universal" className='certified' ref={certifiedContentRef} id='certified'>
        <div>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1734611352/demo-elearning-02_foq5wi.png" alt="" />
        </div>
        <div >
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1734611353/demo-elearning-04_1_vmwo5r.webp" alt="" />
        </div>
        <div>
            <div className='mouser'>
                <a href="" onClick={()=>{lenis.scrollTo("#certified")}}>
                <span><CgMouse /></span>
                </a>
            </div>
            <div className='online-content'>
                <div>
                    <div>
                        <span className='animateCertify1'><GrCertificate /></span>
                        <h2 className='animateCertify2'>Guaranteed and certified</h2>
                    </div>
                    <div>
                        <h1 className='animateCertify3'>Online learning wherever and whenever.</h1>
                    </div>
                </div>
                <div className='divBtn animateCertify4'>
                    <span data-text="Learn more" class="btn-double">
                        Learn more
                    </span>
                    <span >
                    <FaArrowRight />
                    </span>
                </div>
                <div>
                    <div className='animateCertify5'>
                        <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921965/demo-elearning-03_1_u6hpfo.webp" alt="" />
                    </div>
                    <div>
                        <p className='animateCertify6'>Online courses from </p>
                        <span className='animateCertify7'>experts.</span>
                    </div>
                </div>
            </div>
            <div className='online-courses'>
                <div className='animateCertify8'>
                    <div>01</div>
                    <div>
                        <h2>Flexible schedule</h2>
                        <p>eLearning allows learners to quickly and more easily complete their training.</p>
                        <span></span>
                    </div>
                </div>
                <div className='animateCertify9'>
                    <div>02</div>
                    <div>
                        <h2>Pocket friendly</h2>
                        <p>eLearning allows learners to quickly and more easily complete their training.</p>
                        <span></span>
                    </div>
                </div>
                <div className='animateCertify10'>
                    <div>03</div>
                    <div>
                        <h2>Expert Instructor</h2>
                        <p>eLearning allows learners to quickly and more easily complete their training.</p>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Certified