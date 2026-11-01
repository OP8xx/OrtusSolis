/*
Weather component for the website. This component display the current weather with
openmeteo free weather API: https://open-meteo.com/en/docs. This component uses axios to
fetch the API data.
*/

// Image imports
import temperatureIcon from '../../assets/weatherIcons/temperature.png';
import rainIcon from '../../assets/weatherIcons/rain.png';
import humidityIcon from '../../assets/weatherIcons/humidity.png';
import sunRiseIcon from '../../assets/weatherIcons/sunrise.png';
import sunSetIcon from '../../assets/weatherIcons/sunset.png';

// Other component imports
import axios from "axios"; // Tool to fetch data from API
import { useState } from 'react';

export default function WeatherInfo() {

    // States for weather data
    const [temperature, setTemperature] = useState(0);
    const [rainAmount, setRainAmount] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');

    // Defining a new date object and getting the current hour of the object
    const date = new Date();
    const current_hour = date.getHours();

    // Fetcing the data from open-meteo API
    axios.get("https://api.open-meteo.com/v1/forecast?latitude=61.431&longitude=23.8118&daily=sunrise,sunset&hourly=temperature_2m,rain,relative_humidity_2m&timezone=auto&forecast_days=1")
    .then((res) => {
        // Defining weather values to be rendered
        let currentTemperature = Math.round(res.data.hourly.temperature_2m[current_hour]);
        let currentRainAmount = Math.round(res.data.hourly.rain[current_hour]);
        let currentHumidity = Math.round(res.data.hourly.relative_humidity_2m[current_hour]);
        let sunriseTime = res.data.daily.sunrise[0].substring(11, 16);
        let sunsetTime = res.data.daily.sunset[0].substring(11, 16);

        // Changing the weather data states to be rendered on the website
        setTemperature(currentTemperature);
        setRainAmount(currentRainAmount);
        setHumidity(currentHumidity);
        setSunrise(sunriseTime);
        setSunset(sunsetTime);
    });

    return (
        <div className="w-1/3 h-full flex justify-center items-center">
            <div className="w-1/2 h-1/2 border rounded-2xl border-gray-200 flex flex-col p-4 font-main">
                <h1 className="w-full h-1/8 text-3xl">Vuores, Tampere</h1>

                <span className='border opacity-20 mt-2 mb-2'></span>

                <div className='w-full h-1/5 flex items-center gap-4'>
                    <img src={temperatureIcon} alt="" className='h-2/3'/>
                    <p className='text-2xl text-red-400'>{temperature} °</p>
                </div>

                <div className='w-full h-1/5 flex items-center gap-4'>
                    <img src={rainIcon} alt="" className='h-2/3'/>
                    <p className='text-2xl text-blue-300'>{rainAmount} mm</p>
                </div>

                <div className='w-full h-1/5 flex items-center gap-4'>
                    <img src={humidityIcon} alt="" className='h-3/5'/>
                    <p className='text-2xl text-blue-300'>{humidity} %</p>
                </div>

                <div className='w-full h-1/5 flex items-center gap-4'>
                    <img src={sunRiseIcon} alt="" className='h-2/3'/>
                    <p className='text-2xl text-amber-300'>{sunrise}</p>
                    <img src={sunSetIcon} alt="" className='h-2/3'/>
                    <p className='text-2xl text-amber-300'>{sunset}</p>
                </div>
            </div>
        </div>
    )
}