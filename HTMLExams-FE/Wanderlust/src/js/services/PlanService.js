
/*

هو اللي حيجيب الدول -
-يعني بدل ما أتعامل مع JSON في كل مكان. - - > deal with Object 
*/
import ApiClient from "../api/ApiClients.js";
export default class PlanService {
    constructor(apiClient) {
        this.apiClientObj = apiClient;

    }
    async getWeather(coordinates) {
        return await this.apiClientObj.get(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto `)
    }
}