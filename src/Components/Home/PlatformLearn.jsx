import React from 'react'
import '../Home/PlatformLearn.css'

function PlatformLearn({title,descp}) {
  return (
    <div
    container="universal"
    className='platformLearn'
    >
        <div>
            <h4>{title}</h4>
        </div>
        <div>
            <h1>{descp}</h1>
        </div>
    </div>
  )
}

export default PlatformLearn