import React,{useState} from 'react'
import HashLoader
 from "react-spinners/HashLoader";
 import '../Loader/Loader.css'
 import { gsap } from "gsap";
 import { useGSAP } from "@gsap/react";


function Loader({isLoading}) {
    const [color, setColor] = useState("#fff");

    useGSAP(()=>{
        gsap.from(".loader",{ opacity:0})
        gsap.to(".loader",{ opacity:.8},"+=3.5")
    })
  return (
    <div className='loader'>
                {
            isLoading && 
        <HashLoader
        color={color}
        loading={isLoading}
        // cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
                
            
        }

    </div>
  )
}

export default Loader