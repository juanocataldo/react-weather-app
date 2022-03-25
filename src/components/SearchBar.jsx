import style from './SearchBar.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';

export default function SearchBar({pushCity}){


    const [input, setInput] = useState('');

    function modInput(e){        
        setInput(e.target.value)        
    }

    function pushIt(e){
        e.preventDefault()
        pushCity(input)
    }

    return (
        
        <div>           
            <div className={style.navbar}>
            <div className={style.navigation}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <form onSubmit={pushIt}>
                <input type="text" placeholder="Ingresar ciudad" onChange={modInput} value={input} />
                <input type="submit" className={style.btnAdd} value="Submit" />
            </form> 
            </div>
        </div>
    )
}