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
                <div className="row m-4 feed presentCard">
                    <h4>Contact</h4>
                    <div className="social col-sm">
                    <div className="socialBlock">
                    <a href="http://instagram.com/juanocataldo" class="fa fa-instagram"></a>
                    <span style={{color:'rgb(251, 44, 99)'}}>Instagram</span>
                    </div>
                    <div className="socialBlock">
                    <a href="https://www.linkedin.com/in/juan-manuel-cataldo-pavan-a68a9720" class="fa fa-linkedin"></a>
                    <span style={{color:'aqua'}}>Linkedin</span>
                    </div>
                    </div>
                    
                </div>
        </div>
    )

}
