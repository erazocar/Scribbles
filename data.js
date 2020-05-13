export default class data {

    constructor() {
        this.source= source;
    }
/**
*@param {string} [location]
*/

getCurrentWeather(location) {
    return "Weather is sunny for "+location+"based on the data of "+this.source;
}
}