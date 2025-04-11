import React,{useState,useEffect} from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Home/Hero'
import Certified from '../Components/Home/Certified'
import BackToTop from '../Components/BackToTop/BackToTop'
import Loader from '../Components/Loader/Loader'
import PremiumLearn from '../Components/Home/PremiumLearn'
import HomeFeedback from '../Components/Home/HomeFeedback'
import HomeArticle from '../Components/Home/HomeArticle'
import Footer from '../Components/Footer/Footer'
import PlatformLearn from '../Components/Home/PlatformLearn'



function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div >{
      isLoading ?
      (
      <>
       <Loader isLoading={isLoading}/>
      </>
      ):(
        <>
      <Header />
      <Hero />
      <Certified />
      <BackToTop/>
      <PremiumLearn 
      
      />
      <PlatformLearn 
      title="Online learning wherever and whenever."
      descp="Online learning wherever and whenever." />
      <HomeFeedback />
      <HomeArticle />
      <Footer />
        </>
      )
      }
     
    </div>
  )
}

export default Home