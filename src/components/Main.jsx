import React from 'react'
import "../css/Main.css"
import achetemele from "../assets/achetemele.png"
import Csharp from "../assets/Csharp.png"
import JS from "../assets/JS.png"
import LUA from "../assets/LUA.png"
import MYSQL from "../assets/MYSQL.png"
import PY from "../assets/PY.png"


export const Main = () => {

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
      <div className="Logo">

        <div className="nav">
        </div>

      </div>

      <div className='text-center'>
        <div className='Descripcion' >

          <br />

          <p className='DESC'>Soy {Alumno.nombre} estudiante en la Universidad Tecnologica Nacional</p>
          <p className='DESC'>Aprendí lenguajes como: </p>

        </div>
      </div>

      <div className="skills">


      </div>

      <div className="card-container ">

        <div className='card-row1 d-flex'>


          <div style={{ marginTop: '100px' }}>
            <a href="https://www.hostinger.com.ar/tutoriales/que-es-html">
              <img className="card-img-top" src={achetemele} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Html</h5>
              </div>
            </a>
          </div>

          <div style={{ marginTop: '100px' }}>
            <a href="https://dotnet.microsoft.com/es-es/languages/csharp">
              <img className="card-img-top" src={Csharp} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">C#</h5>
              </div>
            </a>
          </div>

          <div style={{ marginTop: '100px' }}>
            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
              <img className="card-img-top" src={JS} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>

              </div>
            </a>
          </div>
        </div>
        <div className='card-row2 d-flex'>
          
          <div style={{ marginTop: '100px' }}>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
            <img className="card-img-top" src={PY} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
            </div>
            </a>
          </div>



          <div style={{ marginTop: '100px' }}>
            <a href="https://www.oracle.com/co/mysql/what-is-mysql/">
            <img className="card-img-top" src={MYSQL} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">My Sql</h5>

            </div>
            </a>
          </div>


          <div style={{ marginTop: '100px' }}>
            <a href="https://www.lua.org/about.html">
            <img className="card-img-top" src={LUA} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Lua</h5>

            </div>
            </a>
          </div>


        </div>

      </div>

    </>
  )
}

export default Main



