import './App.css';
import Card from './components/Card';
import About from './components/About';
import SearchBar from './components/SearchBar';
import {useState} from 'react'
import style from './components/Card.module.css'
import { Route, Router, Switch } from 'react-router-dom';
import City from './components/City'
let ciudades = []


function App() {
  function searchWeather(city) {
    if (city) {
      console.log('entro al 1 fecth')
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=471b195b6090f81db63756b5f43c9bf7&units=metric`)
        .then(response => response.json())
        .then(data => {        
          console.log('entro al 2 fecth')

          console.log(data)
          if(!data.hasOwnProperty('message')){
            console.log('todo ok')
            setError('')          

            ciudades.push(data);          
            setWeather(data)
          }else{
            setError('Not found')
          }

        })
        
    }
  }

  const [weather, setWeather] = useState('')
  const [error, setError] = useState('')


  function cityFilter(id){
    ciudades.filter((ciudad) => ciudad.id === id)
  }
console.log("ERROR ->", error)
  return (
    <div className="App">
      
        
      <SearchBar pushCity={searchWeather}/>
      <Switch>
        {/* <Route exact path='/'></Route> */}
        <Route path='/about'><About /></Route>
        <Route path='/ciudad/:id'>
          <City cities={ciudades}/>
        </Route>
        <Route exact path='/'>
      {/* <Card  /> */}      
      <div className={`${style.card_container}`}>
      { ciudades.length > 0 && error == '' ? ( ciudades.map(ciudad => <Card ciudad={ciudad.name} temp={ciudad.main.temp} min={ciudad.main.temp_min} max={ciudad.main.temp_max} icon={ciudad.weather[0].icon} wallp={ciudad.weather[0].main} id={ciudad.id} country={ciudad.sys.country}/>)) : <div><h3 style={{color:"white"}}>Add cities</h3></div>}
      <br></br>
      </div>  
      { error !== '' ? <div className='bg-danger'><p>Error: {error}</p> </div> : null}
      </Route>
      </Switch>
    </div>
  );
}

export default App;
