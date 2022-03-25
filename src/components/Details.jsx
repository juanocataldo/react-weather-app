import { useParams } from "react-router-dom"
import './details.css'

export default function Details({cities}){

    const params = useParams();
    console.log(cities)
    const ok = cities.find((ciudad) => ciudad.id == params.id)
    function isOk(){
        const ok = cities.find((ciudad) => ciudad.id == params.id)
        if(ok != undefined)
        return true
        else
        return false
    }

    return(
        <div className="cardDetails">
            
            {isOk() ? 
            <div className="detail">
                <h4>{ok.name}</h4>
                Country <h5>{ok.sys.country}</h5>
                Sensación <h5>{ok.main.feels_like}</h5>
            </div> : 'No encontrado'}
            
            </div>
    )
}