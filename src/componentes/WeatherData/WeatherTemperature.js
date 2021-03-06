import React from 'react';
import WeatherIcons from 'react-weathericons';
import{CLOUD,CLOUDY,SUN,RAIN,SNOW,THUNDER} from './../../constantes/estadoTiempoConst';
import PropTypes from 'prop-types';
import './styles.css';
import {DRIZZLE} from "../../constantes/estadoTiempoConst";


const stateIcon = estadoTiempo =>{
    switch (estadoTiempo){
        case CLOUD:
            return CLOUD;
        case CLOUDY:
            return CLOUDY;
        case SUN:
            return "day-sunny";
        case RAIN:
            return RAIN;
        case SNOW:
            return SNOW;
        default:
            return "day-sunny";
    }
};


const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstore",
    [DRIZZLE]:"day-showers"
};

const getWeatherIcon =  (estadoTiempo) =>{
    return (<WeatherIcons className='wicon' name = {stateIcon(estadoTiempo)} size={"2x"}/>)
};

const WeatherTemperature =  ({temperatura,estadoTiempo}) =>(

    <div className='weatherTemperatureCont'>

        {getWeatherIcon(estadoTiempo)}
        <span className={'temperature'}> {`${temperatura} C°`} </span>
        <span className='temperaturetype'>C°</span>
    </div>
);

WeatherTemperature.propType = {

    temperatura: PropTypes.string,
    estadoTiempo: PropTypes.string,

};
export  default  WeatherTemperature;