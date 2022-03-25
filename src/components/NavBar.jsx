import React from "react";
import { Link } from "react-router-dom";
import s from './NavBar.module.css'
import './navbar.css'
export default class NavBar extends React.Component {

    constructor(props) {

        super(props)
        console.log(props)

        this.state = {
            searched: ""
        }
    }

    fillInput = (e) => {
        //e.preventDefault
        this.setState({
            searched: e.target.value
        })

    }

    saveInput = (e) => {
        e.preventDefault();
        this.props.searched(this.state.searched)
        console.log(this.props)
    }

    render() {

        return (
            <div className={s.nav}>
                <Link to="/" className=''><p>Home</p> </Link>
                <Link to="/about"><p>About</p></Link>
                <form onSubmit={this.saveInput}>
                    <input type="text" placeholder="Ingresar ciudad" onChange={this.fillInput} />
                    <input type="submit" className={s.btnAdd} value="Buscar" />
                </form>
            </div>
        )
    }
}