import React from 'react'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/GlobalHeroContainer/HeroGlobal'
import BackToTop from '../Components/BackToTop/BackToTop'
import AboutOnlineCourses from '../Components/About/AboutOnlineCourses'
import PlatformLearn from '../Components/Home/PlatformLearn'
import AboutAccord from '../Components/About/AboutAccord'
import Aboutachieve from '../Components/About/Aboutachieve'
import KeepInTouch from '../Components/Home/KeepInTouch'
import Footer from '../Components/Footer/Footer'


function About() {
  return (
    <div>
      <Header />
      <HeroGlobal 
      img="https://res.cloudinary.com/dk5mfu099/image/upload/v1733922160/demo-elearning-hero-banner-01_bpq6ie.webp"
      title="About our classes"
      heading="We providing the best courses."
      />
      <BackToTop />
      <AboutOnlineCourses />
      <PlatformLearn 
      descp="outstanding online learning courses bringing you and providing amazing online course"
      title="Online learning wherever and whenever."/>
      <AboutAccord />
      <Aboutachieve />
   
      <Footer />
      
    </div>
  )
}

export default About