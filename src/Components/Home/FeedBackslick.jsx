import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import "../Home/FeedBackslick.css"
import { Navigation,Autoplay } from 'swiper/modules';
import { MdOutlineStarPurple500 } from "react-icons/md";

<MdOutlineStarPurple500 />
const FeedBackslickArry=[{
    image:"https://res.cloudinary.com/dk5mfu099/image/upload/v1737485260/front-view-smiley-man-outdoors_23-2148612976_ulougw.avif",
    naame:"Herman miller",
    job:"behavioral science"
  },{
    image:"https://res.cloudinary.com/dk5mfu099/image/upload/v1737485260/cheerful-brunette-curly-brown-eyes-woman-pink-sunglasses-purple-hoodie-smiles-takes-selfie-near-stairs-outside_197531-24283_wqmbzt.jpg",
    naame:"charlotte smith",
    job:"business owner"
  },{
    image:"https://res.cloudinary.com/dk5mfu099/image/upload/v1737614984/picture-attractive-young-human-recourses-manager-with-goatee-mustache-crossing-arms-his-chest-smiling-confidently-camera-while-conducting-job-interview-with-talented-candidates_ojrxch.jpg",
    naame:"matthew taylor",
    job:"network security"
  }]

function FeedBackslick() {
  
  return (
    <div className='FeedBackslick'>
     <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true} modules={[Navigation,Autoplay]}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="Swiper"
    >{
      FeedBackslickArry.map((data,index)=>(
        <>
         <SwiperSlide key={index}>
          <div>
            <img src={data.image} alt="" />
          </div>
          <div>
            <div>
              <span><MdOutlineStarPurple500 /></span>
              <span><MdOutlineStarPurple500 /></span>
              <span><MdOutlineStarPurple500 /></span>
              <span><MdOutlineStarPurple500 /></span>
              <span><MdOutlineStarPurple500 /></span>
            </div>
            <div>
              <p>Course materials were good, the mentoring approach was good and working with other people via the internet was good.</p>
            </div>
            <div>
              <h2>{data.naame}</h2>
              <h3>{data.job}</h3>
            </div>
          </div>
         </SwiperSlide>
        </>
      ))
    }
    </Swiper>
    </div>
  )
}

export default FeedBackslick