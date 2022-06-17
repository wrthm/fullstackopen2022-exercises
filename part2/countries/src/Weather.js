import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]},${country.ccn3}&limit=1&appid=${api_key}`)
      .then(response => {
        const { lat, lon } = response.data[0]
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
          .then(response => setWeather(response.data))
      })
  }, [api_key, country.capital, country.ccn3])

  if (Object.keys(weather).length) {
    return (
      <div>
        <h3>Weather in {country.capital[0]}</h3>
        <div>Temperature {weather.main.temp}°C</div>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main} />
        <h4>{weather.weather[0].description}</h4>
        <div>Wind {weather.wind.speed} m/s</div>
      </div>
    )
  }
  else {
    return <h3>Fetching weather data...</h3>
  }
  
}

export default Weather