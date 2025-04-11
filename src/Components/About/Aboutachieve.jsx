import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaMicroblog } from "react-icons/fa";
import '../About/Aboutachieve.css'
import KeepInTouch from '../Home/KeepInTouch';

function Aboutachieve() {
    const achieveArry = [{
        title:'Best teaching of the year',
        icon:<FaGoogle />,
        year:2017
    },{
        title:'Downloaded app on play store',
        icon:<FaGooglePlay />,
        year:2019
    },{
        title:'Achievments of instructors',
        icon:<FaMicroblog />,
        year:2020
    },{
        title:'1 million views on youtube',
        icon:<FaYoutube />,
        year:2021
    }]
   
  return (
    <div
    container="universal" className='achieve'>
        <div>
            <h1>Great achievements</h1>
        </div>
        <div>
            {
                achieveArry.map((data,i)=>(
                    <>
                    <div key={i} className='achieveTab'>
                        <h3>{data.year}</h3>
                        <div>{data.icon}</div>
                        <h2>{data.title}</h2>
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

export default Aboutachieve