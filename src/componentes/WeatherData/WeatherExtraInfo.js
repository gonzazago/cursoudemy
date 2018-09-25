import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


const WeatherExtraInfo = ({humedad,viento}) => (
    <div className={'weatherExtraInfoContainer'}>
        <span>{`${humedad}% - `}</span>
        <span>{`${viento}  - viento`}</span>
    </div>
);

WeatherExtraInfo.propTypes ={

    humedad: PropTypes.number,
    viento: PropTypes.string
};

export default WeatherExtraInfo;