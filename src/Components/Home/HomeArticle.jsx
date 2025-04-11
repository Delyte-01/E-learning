import React,{useRef} from 'react'
import '../Home/HomeArticle.css'
import KeepInTouch from './KeepInTouch'
import { FaArrowRight } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);


const articleArry =[
    {
            img:"https://res.cloudinary.com/dk5mfu099/image/upload/v1735563290/demo-elearning-07_zuuwks.jpg",
            name:"Andy glamer",
            title:"How to evaluate the effective of training programs.",
            likes:65,
            profilePic:"https://res.cloudinary.com/dk5mfu099/image/upload/v1735563290/avtar-05_w6onzr.jpg",
            className:"homeArticle3"
    },
    {
            img:"https://res.cloudinary.com/dk5mfu099/image/upload/v1733921957/demo-elearning-courses-03_v4hswt.jpg",
            name:" Den viliamson",
            title:"Experience the breathtaking views and perspectives.",
            likes:35,
            profilePic:"https://res.cloudinary.com/dk5mfu099/image/upload/v1735563289/avtar-03_mz6frb.jpg",
              className:"homeArticle4"
    },
    {
            img:"https://res.cloudinary.com/dk5mfu099/image/upload/v1733921958/demo-elearning-courses-01_omgdpq.jpg",
            name:" Jones robbert",
            title:"Build up healthy habits and strong peaceful life.",
            likes:59,
            profilePic:"https://res.cloudinary.com/dk5mfu099/image/upload/v1735563289/avtar-04_i4f8br.jpg",
              className:"homeArticle5"
    }
]
function HomeArticle() {
      const homeArticleRef=useRef();
      useGSAP(()=>{
        let tl =gsap.timeline({
            scrollTrigger:{
              trigger:homeArticleRef.current,
            //   markers:true,
              start:"top center",
              end:"bottom center",
            //   scrub:true
            }
           },{ease:"elastic.in(1,0.3)"});
           tl.from(".homeArticle1",{opacity:0,scale:.5})
           tl.from(".homeArticle2",{opacity:0,scale:.5})
           tl.from(".homeArticle3",{opacity:0,scale:.5})
           tl.from(".homeArticle4",{opacity:0,scale:.5})
           tl.from(".homeArticle5",{opacity:0,scale:.5})         
         }
        )

  return (
    <div container="universal" className='article' ref={homeArticleRef}>
        <div>
            <h1 className='homeArticle1'>Latest articles</h1>
            <div className='homeArticle2'>
                <a href="">
                <p>Explore all articles</p>
                <span><FaArrowRight /></span>
                </a>
            </div>
        </div>
        <div>
            {
                articleArry.map((data,index)=>(
                    <>
                    <div key={index} className={data.className}>
                        <div>
                            <div>
                                <span><img src={data.profilePic} alt="" /></span>
                                <p>by <span>{data.name}</span></p>
                            </div>
                            <div>
                                <span><IoHeartOutline /></span>
                                <h3>{data.likes}</h3>
                            </div>
                        </div>
                        <div>
                            <img className='imgHover' src={data.img} alt="" />
                        </div>
                        <div>
                            <h2>{data.title}</h2>
                            <p>Lorem ipsum has been industry standard dummy text ever...</p>
                        </div>
                    </div>
                    </>
                ))
            }
        </div>
        <div>
            <KeepInTouch />
        </div>
    </div>
  )
}

export default HomeArticle