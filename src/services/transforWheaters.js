import convert from 'convert-units'
import{SUN,CLOUD,RAIN,SNOW,THUNDER,DRIZZLE} from "../constantes/estadoTiempoConst";

const getWheaterState = (weather) =>{
    const{id}= weather;
    if(id < 300){
        return THUNDER;
    }else if(id < 400){
        return DRIZZLE
    }else if( id < 600){
        return RAIN
    }else if (  id < 700){
        return SNOW
    }else if(id === 800){
        return SUN;
    }else{
        return CLOUD;
    }

};

const getTempConvert = kelvin =>{
    return convert(kelvin).from('K').to('C').toFixed(2);
};

const transforWheaters = weather_data => {
    const {humidity,temp} = weather_data.main;
    const {speed}= weather_data.wind;
    const estadoTiempo =  getWheaterState(weather_data.weather[0]);
    const temperature = getTempConvert(temp);

    const data  ={

        humedad: humidity,
        temperatura: temperature,
        estadoTiempo,
        viento : `${speed}m/s`
    }
    return data;
};

export default transforWheaters;