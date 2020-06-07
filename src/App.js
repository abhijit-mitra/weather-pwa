import React,{useState} from 'react';
import Weather from './api/weather';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = async (e)=>{
    if(e.key==='Enter'){
      const res = await Weather.getWeather(query);
      const res_json = await res.json();
      setWeather(res_json);
    }
  }
  return (
    <div className="main-container">
      <input
      type="text"
      className='search'
      placeholder='Search...'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      onKeyPress={search}
      />
      {weather.main &&
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="city-icon"/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
