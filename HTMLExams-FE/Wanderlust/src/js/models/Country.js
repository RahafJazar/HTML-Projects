/*
الهدف  من الموديل هو تحويل ال json to Obj 

*/
export default class Country {
    constructor(data) {

        this.commonName = data.name.common;
        this.officialName = data.name.official;

        this.capital = data.capital[0];

        this.latitude = data.capitalInfo.latlng[0];
        this.longitude = data.capitalInfo.latlng[1];

        this.region = data.region;
        this.subregion = data.subregion;

        this.population = data.population;
        this.area = data.area;

        this.borders = data.borders;

        this.languages = Object.values(data.languages);

        this.currencies = Object.values(data.currencies);

        this.timezones = data.timezones;

        this.flag = data.flags.png;

        this.drivingSide = data.car.side;

        this.startOfWeek = data.startOfWeek;

        this.googleMaps = data.maps.googleMaps;

        this.continent = data.continents[0];
    }
}