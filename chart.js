export default class chart {
gimage = require('google-image-chart').charts;
    constructor() {
        this.data= data;
    }
/**
*@param {array} [saved]
*/
chart = function (arr) {
    options = {
        main: false,
        width: 900,
        height: 250,
        bands: [],
        lines: [],
        points: [],
    }

    var chart = new gimage.lines({
        width: options.width,
        height: options.height,
        bands: options.bands,
        hlines: options.lines,
        points: options.points,
        autoscale: true
    });
    return chart.render(arr);
}

}
