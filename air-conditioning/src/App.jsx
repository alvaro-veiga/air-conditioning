import { useState, useRef } from 'react'
import axios from 'axios'
import Weather from './components/WeatherInformations/Weather'
import Weather5days from './components/WeatherInformations5days/Weather5days'
import './App.css'

function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "a6969421a14890d062fb2963077af3d9"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiDataWeather = await axios.get(url)

    const apiInfo5days = await axios.get(url5days)

    setWeather5days(apiInfo5days)
    setWeather(apiDataWeather.data)

  }

  return (
      <div className='container'>
        <h1>Previsão do tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>
        { weather && <Weather weather={weather}/>}
      </div>
  )
}

export default App
