import {useParams} from 'react-router-dom'
import style from './Card.module.css'

export default function City({cities}){
    
    let id = parseInt(useParams().id)
    let city=cities.filter((ciudad) => ciudad.id === id)
    console.log("filter ",city)
    
    
    console.log(cities)
    

    return <div className=''>
      {city.length > 0 ? 
      <div className={style.cardDetails}>
        <h1>{city[0].name} <img src={`https://countryflagsapi.com/png/${city[0].sys.country}`} className={style.flag} /></h1>
        <hr />
        <div className='row'>

        <div className='col-sm'>

        
        <p>Temperatura mínima: <h3>{city[0].main.temp_min}</h3></p>          
        <p>Temperatura máxima: <h3>{city[0].main.temp_max}</h3></p>         
        <p>Sensación térmica: <h3>{city[0].main.feels_like}</h3></p> 
        </div>

        <div className='col-sm'>
        <p>Temperatura: <h3>{city[0].main.temp}</h3></p> 
        <img src={`http://openweathermap.org/img/w/${city[0].weather[0].icon}.png`} style={{width:'200px'}}/>                        

        </div>

        <div className='col-sm'>
        <p>Viento: <h3>{city[0].wind.speed}</h3></p> 
        <p>Humedad: <h3>{city[0].main.humidity}</h3></p>          
        <p>Temperatura máxima: <h3>{city[0].main.temp_max}</h3></p>         
        
        </div>
        </div>
      </div>
      
      : 'No se encontraron resultados'}
    </div>
}
