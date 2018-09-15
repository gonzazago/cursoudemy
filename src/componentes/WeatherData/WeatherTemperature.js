import React from 'react';
import WeatherIcons from 'react-weathericons';
import{CLOUD,CLOUDY,SUN,RAIN,SNOW} from './../../constantes/estadoTiempoConst';
import PropTypes from 'prop-types';
import './styles.css';


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

const getWeatherIcon =  (estadoTiempo) =>{
    return (<WeatherIcons className={'iconTemperatura'} name = {stateIcon(estadoTiempo)} size={"2x"}/>)
};

const WeatherTemperature =  ({temperatura,estadoTiempo}) =>(

    <div className={'weatherTemperatureCont'}>

        {getWeatherIcon(estadoTiempo)}
        <span className={'temperatura'}> {`${temperatura} C°`} </span>
    </div>
);

WeatherTemperature.propType = {

    temperatura: PropTypes.number.isRequired,
    estadoTiempo: PropTypes.string,

};
export  default  WeatherTemperature;