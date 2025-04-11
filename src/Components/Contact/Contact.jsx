import React from 'react'
import Header from '../Header/Header'
import HeroGlobal from '../GlobalHeroContainer/HeroGlobal'
import BackToTop from '../BackToTop/BackToTop'
import Footer from '../Footer/Footer'

function Contact() {
  return (
    <div>
        <Header />
        <HeroGlobal 
        img="https://res.cloudinary.com/dk5mfu099/image/upload/v1733922160/demo-elearning-hero-banner-01_bpq6ie.webp"
        title="contact us"
        heading="we'd love to hear from your side"
        />
        <BackToTop />
        <Footer />
        
    </div>
  )
}

export default Contact