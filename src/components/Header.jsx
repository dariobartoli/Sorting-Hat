import React from 'react'
import 'animate.css'

export const Header = () => {
  return (
    <>
        <div className='header'>
            <h1 className='animate__animated animate__zoomIn'>¿A que casa de Hogwarts perteneces?</h1>
            <div className='image__container'>
                <img src="./public/assets/image/gryffindor.png" alt="logocasa" className='image__header'/>
                <img src="./public/assets/image/hufflepuff.png" alt="logocasa" className='image__header'/>
                <img src="./public/assets/image/slytherin.png" alt="logocasa" className='image__header'/>
                <img src="./public/assets/image/ravenclaw.png" alt="logocasa" className='image__header'/>
            </div>
        </div>
    </>
  )
}
