import React from 'react'
import '../../css/comp/NuestroEquipo.css'
import equipo01 from '../../assets/sources/equipo_01.jpg'
import equipo02 from '../../assets/sources/equipo_02.jpg'
import equipo03 from '../../assets/sources/equipo_03.jpg'

import socialInst from '../../assets/instagram-icon.png'
import socialFace from '../../assets/facebook-icon.png'
import socialWsp from '../../assets/whatsapp-icon.png'

const NuestroEquipo = () => {
  return (
    <article className='card-nuestroEquipo-cont'>
        <section className='card-nuestroEquipo'>
            <div className="card-nuestroEquipo-imgCont">
                <img src={equipo01} alt="personal de la empresa" className="card-nuestroEquipo-img" />
            </div>
            <div className="card-nuestroEquipo-text">
                <h3 className="card-nuestroEquipo-name">Victor Marquez</h3>
                <h4 className="card-nuestroEquipo-work">Líder Creativo</h4>
                <p className="card-nuestroEquipo-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae illum ut quo consequatur sapiente, porro autem incidunt? Nulla, ullam quod.</p>
            </div>
            <div className="card-nuestroEquipo-footer">
                <img src={socialInst} alt="Instargram icon" className="social" />
                <img src={socialFace} alt="Facebook icon" className="social" />
            </div>
        </section>
        <section className='card-nuestroEquipo'>
            <div className="card-nuestroEquipo-imgCont">
                <img src={equipo02} alt="personal de la empresa" className="card-nuestroEquipo-img" />
            </div>
            <div className="card-nuestroEquipo-text">
                <h3 className="card-nuestroEquipo-name">Juan Peréz</h3>
                <h4 className="card-nuestroEquipo-work">Fotógrafo</h4>
                <p className="card-nuestroEquipo-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae illum ut quo consequatur sapiente, porro autem incidunt? Nulla, ullam quod.</p>
            </div>
            <div className="card-nuestroEquipo-footer">
                <img src={socialInst} alt="Instagram icon" className="social" />
                <img src={socialFace} alt="Facebook icon" className="social" />
            </div>
        </section>
        <section className='card-nuestroEquipo'>
            <div className="cont-todo-nuestroEquipo">
                <div className="card-nuestroEquipo-imgCont">
                    <img src={equipo03} alt="personal de la empresa" className="card-nuestroEquipo-img" />
                </div>
                <div className="card-nuestroEquipo-text">
                    <h3 className="card-nuestroEquipo-name">Julia Gomez</h3>
                    <h4 className="card-nuestroEquipo-work">Administradora</h4>
                    <p className="card-nuestroEquipo-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae illum ut quo consequatur sapiente, porro autem incidunt? Nulla, ullam quod.</p>
                </div>
                <div className="card-nuestroEquipo-footer">
                    <img src={socialInst} alt="Instagram icon" className="social" />
                    <img src={socialFace} alt="Facebook icon" className="social" />
                </div>
            </div>
        </section>
    </article>
  )
}

export default NuestroEquipo
