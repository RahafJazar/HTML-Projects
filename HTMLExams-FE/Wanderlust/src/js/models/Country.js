/*
الهدف  من الموديل هو تحويل ال json to Obj 

*/
export default class Country {
    constructor(data) {

        this.commonName = data.names.common;
        this.officialName = data.names.official;

        this.flag = data.flag.url_svg;

        this.capital = data.capitals?.[0]?.name ?? "N/A";

        this.region = data.region;
        this.subregion = data.subregion;

        this.population = data.population;

        this.area = data.area.kilometers;

        this.continent = data.continents?.[0] ?? "N/A";

        this.callingCode = data.calling_codes?.[0] ?? "N/A";

        this.drivingSide = data.cars.driving_side;

        this.startOfWeek = data.date.start_of_week;

        this.timezone = data.timezones?.[0] ?? "N/A";

        this.languages = data.languages.map(lang => lang.name);

        this.currencies = data.currencies.map(currency => ({
            name: currency.name,
            code: currency.code,
            symbol: currency.symbol
        }));

        this.borders = data.borders ?? [];

        this.googleMaps = data.links.google_maps;

        this.latitude = data.capitals?.[0]?.coordinates?.lat;
        this.longitude = data.capitals?.[0]?.coordinates?.lng;
    }
}