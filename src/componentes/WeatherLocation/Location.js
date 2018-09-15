import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => {// destructuring en una linea
    //console.log(props);
    //const city1 = props.city;//version tradicional
    //const {city} = props;// destructuring
 return(
     <div>
        <h1>{city}</h1>
    </div>);
};

Location.propTypes = {
    city: PropTypes.string,
};

export default Location;