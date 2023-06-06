import coverIMG from '../../assets/sources/cover.jpg'
import lineaIcon from '../../assets/linea-icon.png'
import flechaIcon from '../../assets/flecha-cover.png'
import '../../css/comp/Cover.css'

const Cover = () => {
    return (
        <div className="cover-cont">
        <div className="cont">
            <div className="title-cover">
                <h2 className='h1-cover'>C.A.D.R.O.M SRL</h2>
            </div>
            <div className="scrollea">
                <h4>Ver más</h4>
                <img src={flechaIcon} alt="flecha icon" className='flecha-cover'/>
            </div>
        </div>   
        </div>
    )
}

export default Cover
