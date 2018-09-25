import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";


const LocationList =  ({cities}) =>{
    const handlerWatherLocationClick = ({city,onSelectedLocation}) =>{
        console.log("handlerWatherLocationClick");
        onSelectedLocation(city)
    }
    const strToComponents =  cities =>(
        cities.map(city => 
        (
            <WeatherLocation 
            key={city}
            city = {city}
            onWeatherLocationClick={
                () => handlerWatherLocationClick(city)
            }/>))
    );
    console.log(cities);
    return(
        <div>
            {strToComponents(cities)}
        </div>
    );

};




LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func
}

export default LocationList;