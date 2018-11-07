import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";


const LocationList =  ({cities,onSelectedLocation}) =>{
    const handlerWeatherLocationClick = ({city}) =>{
        console.log("handlerWatherLocationClick");
        console.log(city);
        onSelectedLocation(city);
    };

    const strToComponents =  cities =>(
        cities.map(city => 
        (
            <WeatherLocation 
            key={city}
            city = {city}
            onWeatherLocationClick={
                () => handlerWeatherLocationClick(city)
            }/>))
    );
    console.log(cities);
    return(
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    );

};




LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func
}

export default LocationList;