import './about.css'
import photo from '../img/me.jpg'
export default function Default(){

    return(
        <div className='container'>
            <div className='row m-4'>
                <div className='col-sm-4' id='photo-container'>
                    <div >
                        <img src={photo} alt="foto" id='photo'/>                
                    </div>
                </div>

                <div className='col-sm-8' id='textAbout'>
                    <h2>Hi! I'm Juano</h2>
                    <p>My full name is Juan Manuel Cataldo Pavan. <br />
                    I'm 31 years old and I'm from Argentina. <br />
                    My whole life I've been working on IT, starting as a technician repairing computers,then doing servers maintanence as a devOps and now I'm starting as a fullstack developer. <br />
                    This is my first app, probably a simple one, but it will be the first step of my whole developer career!</p>                    
                </div>
            </div>
        </div>
    )

}
