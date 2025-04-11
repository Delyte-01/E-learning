import React from 'react'
import '../About/AboutOnlineCourses.css'
import { SlGlobe } from "react-icons/sl";
import { IoArrowForwardOutline } from "react-icons/io5";




const OnlineCouresArry=[{
    title:"Skilled instructors ",
    enroll:"student enrolled",
    feedBack:"Great instructors",
    icon:"https://res.cloudinary.com/dk5mfu099/image/upload/v1737748553/demo-elearning-about-icon-01_jpcmoh.webp",
  },{
    title:"Educators helps",
    enroll:"satisfaction rate",
    feedBack:"Students feedback",
    icon:"https://res.cloudinary.com/dk5mfu099/image/upload/v1737748553/demo-elearning-about-icon-02_tsavfv.webp",
  },{
    title:"Get certificte",
    enroll:"student enrolled",
    feedBack:"explore courses",
    icon:"https://res.cloudinary.com/dk5mfu099/image/upload/v1737748553/demo-elearning-about-icon-03_hnf26b.webp",
  },{
    title:"Online classes",
    enroll:"top instructors",
    feedBack:"Popular courses",
    icon:"https://res.cloudinary.com/dk5mfu099/image/upload/v1737748553/demo-elearning-about-icon-04_jbl8m4.webp",
  }]
function AboutOnlineCourses() {
  return (
    <div
    container="universal"
    className='onlineAbout'
    >
        <div>
            <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1734611352/demo-elearning-02_foq5wi.png" alt="" />
        </div>
        <div>
            <div>
            <div>
                <span><SlGlobe /></span>
                <h2>Know about classes</h2>
            </div>
            <h1>We providing the best online courses.</h1>
            </div>
            <div>
            <h3>Online courses from the world's leading experts.</h3>
            <p>Lorem ipsum is simply dummy of the printing and typesetting industry lorem ipsum has the industry standard dummy.</p>
            </div>
        </div>
        <div>
            {
                OnlineCouresArry.map((data,index)=>(
                    <>
                    <div key={index}>
                            <div>
                                <div>
                                    <img src={data.icon} alt="" />
                                 </div>
                            </div>
                            <div>
                                <h2>{data.title}</h2>
                                <p>Best online platform for professional  courses.</p>
                            </div>
                            <div>
                                <div>{data.enroll}</div>
                                <div className='enroll-hover'>
                                    <button>
                                        <span>{data.feedBack}</span>
                                        <span><IoArrowForwardOutline /></span>
                                    </button>
                                </div>
                            </div>
                    </div>
                    </>
                ))
                
            }
        </div>
    </div>
  )
}

export default AboutOnlineCourses