import React ,{Component} from 'react';
import PropTypes from  'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css';

class ForecastExended extends Component{

    render(){
        const {city} = this.props ;
        return(

            <div>
                <h2 className={'forecast-title'}>Pronostico extendido {city}</h2>
                <ForecastItem/>
            </div>
        )
    }
}
ForecastExended.propTypes ={
    city : PropTypes.string.isRequired
};

export default  ForecastExended;