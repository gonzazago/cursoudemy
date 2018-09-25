import {api_key, url_base} from "../constantes/apiUrls";

const getUrlWeatherByCity = city => {
    return `${url_base}?q=${city}&appid=${api_key}`;
};

export default getUrlWeatherByCity;