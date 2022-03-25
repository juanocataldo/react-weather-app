import './about.css'
import photo from '../img/me.jpg'
export default function Default(){

    return(
        <div>
            <div className="about">
            <img src={photo} alt="foto" id='photo'/>
                <h2>Soy Juan!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint illo eligendi commodi impedit accusamus quae earum, quibusdam, quaerat, nam alias error atque itaque expedita voluptate? Libero, eius. Eos, deserunt soluta?</p>
                
            </div>
        </div>
    )

}