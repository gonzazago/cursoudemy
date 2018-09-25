import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import transformWheaters from './../../services/transforWheaters'
import Location from './Location';
import WeatherData from "../WeatherData";
import getUrlWeatherByCity from "../../services/getUrlByCity";

// const location = "";

export default  class  WeatherLocation extends Component{

    constructor (props){
        super(props);
        const {city } = props;
        this.state =  {
            city,
            data : null
        };
        console.log("constructor")
    }

    // componentWillMount(){
    //
    // }
    // componentWillUpdate(){
    //     console.log("componenttWillUpdate");
    // }

    //Se ejecuta despues que el componente fue renderizado unica vez
    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentDidUpdate() {
        console.log("componenttDidUpdate");


    }


    handleUpdateClick = () =>{
        //Para ir al servidor
        const api_web = getUrlWeatherByCity(this.state.city);
        fetch(api_web).then(
            data =>{
                console.log(data);
                return data.json();
            }
        ).catch(function (ex) {
            console.error(ex);
        }).then(wheater_data => {
            console.log("resultado del HandleUpdateClieck");
            const data = transformWheaters(wheater_data);
            this.setState({data});
        })
    };

    //Se ejecuta en la inicializacion del componente unica vez

    //

    //
    // //Se ejecuta cada vez que se actualiza el componente antes del render
    // componentWillUpdate(){
    //     console.log("componenttWillUpdate");
    // }
    //
    // //Se ejecuta cada vez que se actualiza el componente despues del render
    //



    render = () => {
        console.log("render");

        const {city,data } = this.state;
        return(
            <div>
                <Location city={city}/>
                {data  ? <WeatherData data={data}/> : <CircularProgress size={50}/>}
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    };

}
WeatherLocation.propTypes = {
    city: PropTypes.string
};




