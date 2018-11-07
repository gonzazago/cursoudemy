import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


const WeatherExtraInfo = ({humedad,viento}) => (
    <div className={'weatherExtraInfoCont'}>
        <span className='extraInfoText' >{`${humedad}% - `}</span>
        <span className='extraInfoText' >{`${viento}  - viento`}</span>
    </div>
);

WeatherExtraInfo.propTypes ={

    humedad: PropTypes.number,
    viento: PropTypes.string
};

export default WeatherExtraInfo;