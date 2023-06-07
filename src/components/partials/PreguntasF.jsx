import React, { useState, useRef } from 'react'
import arrow from '../../assets/flecha-details.png'
import '../../css/comp/PreguntasF.css'

const PreguntasF = () => {

    const [isShow, setIsShow] = useState(false)

    const contDetailRef = useRef(null);
    const contDetailRef1 = useRef(null);
    const contDetailRef2 = useRef(null);

    const imgRef = useRef(null)
    const handleShowDetail = (ref) => {
        const contDetail = ref.current;
        if(isShow){
            contDetail.classList.add('show-d')
        }else{
            contDetail.classList.remove('show-d')   
        }
        setIsShow(!isShow)
    }


  return (
    <>
    <div className='preguntasF-cont' onClick={()=>handleShowDetail(contDetailRef)}>
      <div className='header-details'>
        <h3>¿Qué significa CADROM?</h3>
        <img src={arrow} alt="flecha de detalles" ref={imgRef}/>
      </div>
      <div className="cont-details" ref={contDetailRef}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas autem in quibusdam expedita totam provident suscipit ducimus assumenda sunt.</p>
      </div>
    </div>
    <div className='preguntasF-cont' onClick={()=>handleShowDetail(contDetailRef1)}>
      <div className='header-details'>
        <h3>¿Qué significa CADROM?</h3>
        <img src={arrow} alt="flecha de detalles" ref={imgRef}/>
      </div>
      <div className="cont-details" ref={contDetailRef1}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas autem in quibusdam expedita totam provident suscipit ducimus assumenda sunt.</p>
      </div>
    </div>
    <div className='preguntasF-cont' onClick={()=>handleShowDetail(contDetailRef2)}>
      <div className='header-details'>
        <h3>¿Qué significa CADROM?</h3>
        <img src={arrow} alt="flecha de detalles" ref={imgRef}/>
      </div>
      <div className="cont-details" ref={contDetailRef2}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas autem in quibusdam expedita totam provident suscipit ducimus assumenda sunt.</p>
      </div>
    </div>
    </>
  )
}

export default PreguntasF
