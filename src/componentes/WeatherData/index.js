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
        temperatura: PropTypes.string,
        estadoTiempo: PropTypes.string,
        humedad:PropTypes.number,
        viento: PropTypes.string
    })

}
export default WeatherData;