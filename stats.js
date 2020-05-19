export default class stats {

    constructor() {
        this.data= data;
    }

    /** copydata: makes a copy of original data.
     * @param {data} original data.
     * @returns {data} copy of original data.
     */
    copydata = function(data){
        var arr = [];
        for (i=0; i<data.length;i++){
            arr.push(data[i]);
        }
        return arr;
    }

    /** onearray: converts data object into 1d array.
     * @param {data} data object, either original or copy.
     * @returns {array}
     */
    onearray = function(data){
        var arr = [];
        for (var i=0; data.length;i++){
            arr.push(data[0][i]);
        }
        return arr;
    }

    /** sum: sums all data in a series.
     * @param {data} data either original or copy from original.
     * @returns {var} sum of all data in an array.
     */
    sum = function (data) {
        var arr = dataarray(data);
        var sum = 0;
        var i = arr.length;
        while (--i >=0)
            sum += arr[i];
        return sum;
    };

    /** mean: calculates the mean of a 1d array.
     * @param {array} array with data.
     * @returns {var} mean of the data.
     */
    mean = function(data) {
        var arr = dataarray(data);
        var total = 0;
        total = this.sum(arr)
        m = total / arr.length;
        return m;
    };

    /** stdev = calculates standard deviation of an array.
     * @param {array} array with data.
     * @returns {var} variable with standard deviation.
     */
    stddev = function (arr) {
        var mean = this.mean();
        var SD = 0;
        var nex =[];
        for(var i=0; i<arr.length;i+=1){
            nex.push((arr[i]-mean)*(arr[i]-mean));
        }
        return SD=Math.sqrt(Math.sum(nex)/nex.length);
    };

    /** sumsqrd: calculates sum of squares for a dataset.
     * @param {array} array with data.
     * @returns {var} variable with sum of squares for data.
     */
    sumsqrd = function(arr) {
        var sum = 0;
        var i = arr.length;
        while (--i >=0)
            sum+= arr[i];
        return sum;
    };

    /** min: minimum value of an array
     * @param {array} array with data.
     * @returns {var} variable with min value of dataset.
     */
    min = function(arr) {
        var low = arr[0];
        var i=0;
        while (++i <arr.length)
            if (arr[i] <low)
                low = arr[i];
        return low;
    };

    /** max: maximum value of an array.
     * @param {array} array with data.
     * @returns {var} variable with max value of dataset.
     */
    max = function(arr) {
        var high=arr[0];
        var i=0;
        while (++i < arr.length)
            if (arr[i] > high)
                high = arr[i];
        return high
    };

    /** unique: unique values in an array.
     * @param {array} array with data.
     * @returns {array} array with unique values.
     */
    unique = function(arr) {
        var un = {}, _arr = [];
        for(var i=0; i<arr.length; i++){
            if (!un[arr[i]]){
                un[arr[i]] = true;
                _arr.push(arr[i]);
            }
        }
        return _arr;
    };

    /** standardize: use mean and standard deviation to standardize the original dataset.
     * @param {array} array with data.
     * @returns {array} array with standardized data.
     */
    standardize = function(arr) {
        var _arr = [];
        var stddev = this.stddev();
        var mean = this.mean();
        for (var i=0; i<arr.length; i++) {
            _arr[i]=(arr[i]-mean(arr))/stddev(arr);
        }
        return _arr;
    };

    /** quantile: quantile calculator for given data and q written as (ie. 25, 75)
     * @param {array} array with data.
     * @param {var} number of quantile required.
     * @returns {array} array with values fitting the quartile.
     */
    quantile = function(arr,q){
        var _arr=arr.slice();
        _arr.sort(function(a,b){
            return a-b
        });
        var p = (arr.length - 1) * q;
        var b = Math.floor(p);
        var rest = p - b;
        if ((_arr[b+1]!==undefined)){
            return _arr[b] + rest * (_arr[b+1] - _arr[b]);
        } else {
            return _arr[b];
        }   
    };

    /** outliers: obtain outliers from dataset.
     * @param {array} array with data.
     * @returns {array} array with outlier data.
     */
    outliers = function(arr) {
        var Q_25 = this.quantile(arr,0.25);
        var Q_75 = this.quantile(arr,0.75);
        var IQR = Q_75-Q_25;
        var out = [];
        for (var i=0; i <arr.length;i++){
            if (arr[i] < (1.5*IQR-Q_25) || arr[i] > (1.5*IQR+Q_75)) {
                out.push(arr[i]);
            } 
        }
        return out;
    };

    /** outremove: remove outliers from dataset.
     * @param {array} array with data.
     * @returns {array} array with cleaned data.
     */
    outremove = function(arr) {
        var or = arr.slice();
        var out = this.outliers(arr);
        for (var i=0; i<or.length;i++){
            if (or[i]===out[i]){
                or.splice(i,1);
                i--;
            }
        }
        return out;
    }
}
