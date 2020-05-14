export default class data {

    constructor() {
        this.source= source;
    }
/**
*@param {string} [location]
*/

/**
 * 
 */
output = function() {
    return this.data;
}

location = function() {
    var cityname = "";
    var base_url = "";
    var units= extend ;     
}

getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status,xhr.response);
        }
    };
    xhr.send();    
};


getCurrentWeather(location) {
    return "Weather is sunny for "+location+"based on the data of "+this.source;
}
}