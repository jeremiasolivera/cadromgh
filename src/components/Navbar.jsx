import {React,useRef} from 'react'
import '../css/Navbar.css'
import logoCadrom from '../assets/logo-cadrom.png'



const Navbar = () => {

    const li = useRef()

    const handleExit = () =>{
        const checkbox = document.querySelector(".main-navigation-toggle")
        checkbox.checked = false
    }

  return (
    <header className='cont-navbar-menu'>
        <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
        <label htmlFor="page-nav-toggle">
        <svg className="icon--menu-toggle" viewBox="0 0 60 30">
            <g className="icon-group">
            <g className="icon--menu">
                <path d="M 6 0 L 54 0" />
                <path d="M 6 15 L 54 15" />
                <path d="M 6 30 L 54 30" />
            </g>
            <g className="icon--close">
                <path d="M 15 0 L 45 30" />
                <path d="M 15 30 L 45 0" />
            </g>
            </g>
        </svg>
        </label>

        <nav className="main-navigation">
        <input className="main-navigation-toggle" type="checkbox" />
        <ul>
            <li onClick={handleExit}><a >Inicio</a></li>
            <li onClick={handleExit}><a href="#nuestroEquipo">Sobre Nosotros</a></li>
            <li onClick={handleExit}><a href="#">Contacto</a></li>
            <li onClick={handleExit}><a href="#preguntasFrecuentes">Preguntas</a></li>
        </ul>
        </nav>

        <img src={logoCadrom} alt="Logo CADROM" width={25}/>
    </header>
  )
}

export default Navbar
