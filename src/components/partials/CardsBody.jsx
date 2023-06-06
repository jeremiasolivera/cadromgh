import React from 'react'
import lineaIcon from '../../assets/linea-icon.png'
import '../../css/comp/CardsBody.css'

import img01 from '../../assets/sources/01_img.jpg'
import img02 from '../../assets/sources/02_img.jpg'
import img03 from '../../assets/sources/03_img.jpg'

const CardsBody = () => {

  return (
    <div className="cont-cardsBody">
        <article className='card-body-cont'>
            <section className="card-body-header">
                <h3 className='card-body-number'>01</h3>
                <img src={lineaIcon} alt="linea icon" className='card-body-linea'/>
                <h4 className="card-body-subtitle">
                    Comenzando
                </h4>
            </section>
            <section className="card-body-body">
                <h2 className='card-body-title'>¿Cómo comenzó todo?</h2>
                <p className="card-body-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia nobis totam ea iure sequi omnis? Excepturi nobis omnis vero sequi praesentium provident aliquam iusto? Maiores nostrum nihil aspernatur magnam.
                </p>
            </section>
            <section className='card-body-footer'>
                <div className="card-body-contimg">
                    <img src={img01} alt="" className='card-body-img'/>
                </div>
            </section>
        </article>

        <article className='card-body-cont'>
            <section className="card-body-header-r">
                <h4 className="card-body-subtitle">Nuestra Misión</h4>
                <img src={lineaIcon} alt="linea icon" className='card-body-linea-r'/>
                <h3 className='card-body-number'>02</h3>
            </section>
            <section className="card-body-body">
                <h2 className='card-body-title-r'>Nuestra Reponsabilidad</h2>
                <p className="card-body-paragraph-r">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla, earum suscipit provident consequatur eaque dolore. Dolores omnis excepturi qui.
                </p>
            </section>
            <section className='card-body-footer-r'>
                <div className="card-body-contimg">
                    <img src={img02} alt="" className='card-body-img'/>
                </div>
            </section>
        </article>

        <article className='card-body-cont'>
            <section className="card-body-header">
                <h3 className='card-body-number'>03</h3>
                <img src={lineaIcon} alt="linea icon" className='card-body-linea'/>
                <h4 className="card-body-subtitle">
                    Lo que queremos lograr
                </h4>
            </section>
            <section className="card-body-body">
                <h2 className='card-body-title'>Adaptación a los requerimientos</h2>
                <p className="card-body-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, deleniti.
                </p>
            </section>
            <section className='card-body-footer'>
                <div className="card-body-contimg">
                    <img src={img03} alt="" className='card-body-img'/>
                </div>
            </section>
        </article>
    </div>
  )
}

export default CardsBody
