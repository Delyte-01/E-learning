import React from 'react'
import '../Components/ErrorPage.css'

function ErrorPage() {
  return (
    <div className='error'>
    <div> <li><a href="/">home</a></li></div>
    <div>
        <h1>404</h1>
        <div></div>
        <p>This page could not be found</p>
    </div>
 </div>
  )
}

export default ErrorPage