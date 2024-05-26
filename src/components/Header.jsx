import React, { useState } from 'react'
import "../css/Header.css"
import Emanuel from "../assets/Emanuel.jpg"


const Header = () => {

  const Alumno = {
    nombre: "Emanuel",
    apellido: "Aguirre",
    edad: 19,
    Nacionalidad: "Argentina",
    email: "aguirreemanuel567@gmail.com",
    Tel: "(+54) 381 3866499",
    hobby: "Futbol"


  }


  return (
    <>


      <nav className="menu-vertical">
        <p>Proximamente</p>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <div className='d-flex justify-content-center'>
        <div className="Portada" >
            <div className='text-aline-center'>
          <h1 className='QSY'> Emanuel Aguirre  </h1> 
          <br />
          
          </div>
          <br />
          <img src={Emanuel} alt="" />

          <div className='Img' >


          </div>
        </div>
      </div>


    </>
  )
}

export default Header