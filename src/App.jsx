import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Lenis from 'lenis'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect } from "react";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Contact from "./Components/Contact/Contact";



function App() {
 // Initialize a new Lenis instance for smooth scrolling
 const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
// const lenis = new Lenis();

// useEffect(() => {
//   const anchorLinks = [...document.querySelectorAll("a[href]")];
//   anchorLinks
//     .filter((a) => a.href.includes("/#"))
//     .forEach((a) => {
//       a.addEventListener("click", (e) => {
//         e.preventDefault();
//         const href = "#" + a.href?.split("/#").at(-1);
//         console.log(href);
//         lenis.scrollTo(href);
//       });
//     });
//   }, []);

  // lenis.on('scroll', ScrollTrigger.update);
  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000);
  // });
  // gsap.ticker.lagSmoothing(0);



  return (
    <>
     <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}/>
     </Routes>
     </div>
    </>
  )
}

export default App
