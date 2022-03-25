import { useState } from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'


export default function Card({ ciudad, temp, icon, country, id }) {

    const [closed, setClosed] = useState(true)

    function close() {
        setClosed(false)
    }

    return (

        <div>
            {

                closed &&

                <div style={{ margin: "40px" }}>
                    <div className={style.btnCard}>
                        <button onClick={close} >Close</button>
                    </div>
                    <div className={style.card_titulo}>
                        <Link to={`/ciudad/${id}`}> <span>{ciudad}</span></Link>
                        <span style={{ color: "gray" }}>{country}</span>
                        <img src={`https://countryflagsapi.com/png/${country}`} className={style.flag} />
                    </div>
                    <div className={style.card}>
                        <img src={`http://openweathermap.org/img/w/${icon}.png`} />
                        <h1>{temp}°</h1>
                    </div>


                </div>}
        </div>
    )
}