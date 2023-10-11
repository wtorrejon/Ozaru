import React from 'react'
import Img404 from '../assets/Icons/Img404/Img404'

const Error404 = () => {
  return (
    <div className='container-error404'>
        <div className='wrapper-img'>
            <Img404 />
        </div>
        <div>
            <h1>
                Error <b>404</b>
            </h1>
            <h3>
                Page not found
            </h3>
        </div>
    </div>
  )
}

export default Error404