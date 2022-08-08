import style from './SearchBar.module.css'
import {useState} from 'react'
import { NavLink } from 'react-router-dom';

export default function SearchBar({pushCity}){


    const [input, setInput] = useState('');

    function modInput(e){        
        setInput(e.target.value)        
    }

    function pushIt(e){
        e.preventDefault()
        pushCity(input)
        setInput("") 
    }

    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <div >
                    <NavLink exact to="/" activeClassName={`btn btn-sm ${style.btnapp}`}>Home</NavLink>
                    <NavLink to="/about" activeClassName={`btn btn-sm ${style.btnapp}`}>About</NavLink>
                </div>
                <form className="d-flex" onSubmit={pushIt}>
                    <div className="col-sm-6">
                        <input type="text" placeholder="Ingresar ciudad" onChange={modInput} value={input} className="form-control form-control-sm me-2" id='a' />

                    </div>
                    <div className="col-sm-6">
                        <input type="submit" className={`btn btn-sm ${style.btnapp}`} value="Submit" />

                    </div>
                </form>
            </div>
        </nav>
    )
}