import React from 'react';
import WeatherExtraInfo  from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import PropTypes from 'prop-types';
import './styles.css';

const WeatherData = ({ data }) =>{
    const  {  temperatura ,estadoTiempo,humedad,viento } = data;
    return(
        <div className='weatherDataCont'>
            <WeatherTemperature temperatura = {temperatura} estadoTiempo={estadoTiempo}/>
            <WeatherExtraInfo humedad={humedad} viento={viento}/>

        </div>
    );
};

WeatherData.propTypes ={
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoTiempo: PropTypes.string.isRequired,
        humedad:PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired,
    })

}
export default WeatherData;