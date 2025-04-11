import React, { useState } from 'react'
import '../About/AboutAccord.css'
import { BsAward } from 'react-icons/bs'
import Atropos from 'atropos/react'
import '../Home/atropos.min.css'

const AboutAccordData =[{
       title:"learn with expert instructors",
       params:"Web-based training you can consume at your own pace. Courses are interactive.",
       SN:1,
    },{
        title:"Highly flexible learning time",
        params:"Web-based training you can consume at your own pace. Courses are interactive.",
         SN:2
     },{
        title:"Amazing skills for teaching",
        params:"Web-based training you can consume at your own pace. Courses are interactive.",
          SN:3
     }]


function AboutAccord() {
  const [selected,setSelected] = useState(0)
        const toggle = (i)=>{
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
        }
  return (
    <div className='aboutAccord' container="universal">
        <div>
        <Atropos
            shadow={false}>
                <div className='premiumLearn1'>
                    <img 
                    data-atropos-offset="-5" src="https://res.cloudinary.com/dk5mfu099/image/upload/v1737748926/demo-elearning-about-01_d4grj8.webp" alt="" />
                    <img 
                     src="https://res.cloudinary.com/dk5mfu099/image/upload/v1733921955/demo-elearning-06_brpbk5.webp" alt="" />
                </div>
        </Atropos>
        </div>
        <div>
            <div>
                <div>
                    <span><BsAward /></span>
                    <h3>Why you choose us ?</h3>
                </div>
                <div>
                   <h1> Teaching makes you productive.</h1>
                </div>
            </div>
            <div>
                {
                  AboutAccordData.map((data,i)=>(
                    <>
                    <div key={i} className='about-content'>
                      <div onClick={()=>toggle(i)} className='aboutAccordHeader'>
                        <span>{data.SN}</span>
                      <h2>{data.title}</h2>
                      </div>
                      <div className={selected === i ? "About_content display":"About_content"}>
                        <p>{data.params}</p>
                      </div>
                    </div>
                    </>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default AboutAccord