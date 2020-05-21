export default class hydro {
    constructor() {
        this.source= source
        this.data = data;
    }

    /**Arithmetic mean: computation of aereal mean precipitation for a river basin given it has different stations.
     * @param {data} object with time series data for different stations throughout the basin.
     * @returns {array} object with average precipitaiton for a specific time series.
     */
    arithmetic = function(data) {
        var arr1 = [];
        for (var i=0; i < arr.length; i++){
           arr1.push()             
        }
     }
     /**Thiessen polygon: calculates average precipitation for a basin considering there is
      * one station per sub basin.
      * @param {data} object with arrays of time series.
      * @param {data} object with arrays of areas per subbasin.
      * @returns {array} time series of average precipitation over whole sub basin.
      */
     thiessen = function(arr1, arr2) {
        var count = arr2.count();
        outputarr = [];
        for (var i = 0; i<arr1.length; i++){
            outputarr[i]= arr1[i]*arr2[i]
        }
    }

    /** bucketmodel: does simple rainfall-runoff analyses over a rainfall dataset given landuse, baseflow and infiltration capacity.
     * @param {array} dataset with rainfall information.
     * @param {param} parameter file from JSON object for landuse and infiltration capacity.
     * @param {var} var with baseflow information. 
     */
    bucketmodel = function(arr, parms, vars){
        
    }
}