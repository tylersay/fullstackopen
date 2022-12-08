import { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = (props) => {
    const api_key = process.env.REACT_APP_API_KEY
    // console.log('heroCountry.capital', heroCountry.capital)
    const apiCallCapital = props.capital[0].replace(/ /g, "%20")
    const api_call = `http://api.openweathermap.org/data/2.5/weather?q=${apiCallCapital}&APPID=${api_key}`
    // console.log('api_call', api_call)
    const [weatherData, setWeatherData] =
        useState({
            // initial dummy data to load
            weather: [{ icon: "09d", main: "rain" }],
            main: { temp: 100 },
            wind: { speed: 100 }
        })

    useEffect(() => {
        axios
            .get(api_call)
            .then(response => {
                setWeatherData(response.data)
                // console.log('response.data', response.data)
            })
    }, [])
    // console.log('weatherData', weatherData)
    const weatherIcon = weatherData.weather[0].icon
    // console.log('weatherIcon', weatherIcon)
    const temp = (weatherData.main.temp / 10).toFixed(2)
    // console.log('temp', temp)
    return (
        <>
            <h2>Weather in {props.capital}</h2>
            <p />temperature: {temp}°C
            <p />
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt="weather icon" />
            <p /> wind speed: {weatherData.wind.speed} m/s
        </>
    )
}

export default Weather