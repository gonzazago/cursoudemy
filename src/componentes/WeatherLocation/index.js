import React,{Component} from 'react';
import transformWheaters from './../../services/transforWheaters'
import Location from './Location';
import WeatherData from "../WeatherData";
import{SUN,RAIN} from "../../constantes/estadoTiempoConst";



const location = "Buenos Aires,ar";
const api_key = "ac32ad697461279feeb8d4fbe3da2994"
const api_web =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
export default  class  WeatherLocation extends Component{

    constructor (){
        super();
        this.state =  {
            city: "Buenos Aires!!",
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
                {data  ? <WeatherData data={data}/> : "Cargando..."}
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    };

}


