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
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=471b195b6090f81db63756b5f43c9bf7&units=metric`)
        .then(response => response.json())
        .then(data => {        
          console.log(data);
          ciudades.push(data);          
          setWeather(data)
        })
        .catch(error => console.log(error))
    }
  }

  const [weather, setWeather] = useState('')
  console.log(ciudades)


  function cityFilter(id){
    ciudades.filter((ciudad) => ciudad.id === id)
  }

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
      { ciudades.length > 0 ? ( ciudades.map(ciudad => <Card ciudad={ciudad.name} temp={ciudad.main.temp} min={ciudad.main.temp_min} max={ciudad.main.temp_max} icon={ciudad.weather[0].icon} wallp={ciudad.weather[0].main} id={ciudad.id} country={ciudad.sys.country}/>)) : <div><h3 style={{color:"white"}}>Agregar ciudades para ver su clima</h3></div>}
      </div>  
      </Route>
      </Switch>
    </div>
  );
}

export default App;
