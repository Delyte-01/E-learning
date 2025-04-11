import React, { useState,useRef } from 'react'
import '../Home/PremiumLearn.css'
import Atropos from 'atropos/react';
import '../Home/atropos.min.css'
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const exploreData =[{
       title:"Master the skills that matter to you",
       params:"Web-based training you can consume at your own pace. Courses are interactive.",
       iconSvg:<FaRegAddressCard />
    },{
        title:"Connect with effective methods",
        params:"Web-based training you can consume at your own pace. Courses are interactive.",
        iconSvg:<CgSandClock />
     },{
        title:"Increase your learning skills",
        params:"Web-based training you can consume at your own pace. Courses are interactive.",
        iconSvg:<VscSettingsGear />
     }]

function PremiumLearn() {
  const [selected,setSelected] = useState(0)
    const toggle = (i)=>{
    if(selected === i){
        return setSelected(null)
    }
    setSelected(i)
    }


     const premiumRef=useRef();
      useGSAP(()=>{
        let tl =gsap.timeline({
            scrollTrigger:{
              trigger:premiumRef.current,
            //   markers:true,
              start:"top center",
              end:"bottom center",
            }
           },{ease:"elastic.in(1,0.3)"});
           tl.from(".premiumLearn1",{opacity:0,scale:.5})
           tl.from(".premiumLearn2",{opacity:0,scale:.5})
           tl.from(".premiumLearn3",{opacity:0,scale:.5})
           tl.from(".premiumLearn4",{opacity:0,scale:.5})
           tl.from(".premiumLearn5",{opacity:0,scale:.5})
           tl.from(".premiumLearn6",{opacity:0,scale:.5})
          }
        )
  return (
    <div className='premiumLearn' container="universal" ref={premiumRef}>
        <div>
            <Atropos
            shadow={false}>
                <div className='premiumLearn1'>
                    <img 
                    data-atropos-offset="-5" src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733922216/demo-elearning-05_fvhz2t.webp" alt="" />
                    <img 
                     src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921955/demo-elearning-06_brpbk5.webp" alt="" />
                </div>
            </Atropos>
           
        </div>
        <div>
            <div>
                <div>
                    <span className='premiumLearn2'><IoBriefcaseOutline /></span>
                    <p className='premiumLearn3'>Premium learning experience</p>
                </div>
                <div>
                    <h1 className='premiumLearn4'>Providing amazing online courses.</h1>
                </div>
            </div>
            <div className='premiumLearn5'>
                {
                    exploreData.map((data,i)=>(
                        <>
                        <div className='itemAccord' >
                              <div className="item_header" onClick={()=>toggle(i)}>
                                    <div>{data.title}</div>
                              </div>
                              <div className={selected === i ? "item_content display":"item_content"}>
                                <div>
                                <p className="params">{data.params}</p>
                                <span className="item_svg">{data.iconSvg}</span>
                                </div>
                              </div>
                        </div>
                        </>
                    ))
                }
            </div>
            <div className='divBtn premiumLearn6'>
                <a href="">
                <span className='btn-double' data-text="Explore courses">Explore courses
                </span>
                <span><FaArrowRight /></span>
                </a>
            
            </div>
        </div>
    </div>
  )
}

export default PremiumLearn