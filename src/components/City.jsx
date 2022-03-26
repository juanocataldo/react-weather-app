import {useParams} from 'react-router-dom'
import style from './Card.module.css'

export default function City({cities}){
    
    let id = parseInt(useParams().id)
    let city=cities.filter((ciudad) => ciudad.id === id)
    console.log("filter ",city)
    
    
    console.log(cities)
    

    return <div>
      {city.length > 0 ? 
      <div className={style.cardDetails}>
        <h1>{city[0].name} <img src={`https://countryflagsapi.com/png/${city[0].sys.country}`} className={style.flag} /></h1>
        <hr />
        <p>Temperatura: <h3>{city[0].main.temp}</h3></p> 
        <p>Temperatura mínima: <h3>{city[0].main.temp_min}</h3></p>          
        <p>Temperatura máxima: <h3>{city[0].main.temp_max}</h3></p>         
        <p>Sensación térmica: <h3>{city[0].main.feels_like}</h3></p> 
      </div>
      
      : 'No se encontraron resultados'}
    </div>
}
