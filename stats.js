export default class stats {

    constructor() {
        this.source= source;
    }
//var isArray = Array.isArray || function isArray(arg) {
//return toString.call(arg) === '[Object Array]'
//

/**
*@param {array} [retrieved data]
*@return {Number}
*/

//calculate the sum of the values of an array
sum = function (arr) {
    var sum = 0;
    var i = arr.length;
    while (--i >=0)
        sum += arr[i];
    return sum;
};

//calculate statistic mean of an array
mean = function(arr) {
    var total = 0;
    total = this.sum(arr)
    m = total / arr.length;
    return m;
};

//calculate the standard deviation of an array
stddev = function (arr) {
    var mean = this.mean();
    var SD = 0;
    var nex =[];
    for(var i=0; i<arr.length;i+=1){
        nex.push((arr[i]-mean)*(arr[i]-mean));
    }
    return SD=Math.sqrt(Math.sum(nex)/nex.length);
};

//calculate the squared sum of the values of an array
sumsqrd = function(arr) {
    var sum = 0;
    var i = arr.length;
    while (--i >=0)
        sum+= arr[i];
    return sum;
};

//minimum value of an array
min = function(arr) {
    var low = arr[0];
    var i=0;
    while (++i <arr.length)
        if (arr[i] <low)
            low = arr[i];
    return low;
};

//maximum value of an array
max = function(arr) {
    var high=arr[0];
    var i=0;
    while (++i < arr.length)
        if (arr[i] > high)
            high = arr[i];
    return high
};

//unique values in an array
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

//standardize data
standardize = function(arr) {
    var _arr = [];
    var stddev = this.stddev();
    var mean = this.mean();
    for (var i=0; i<arr.length; i++) {
        _arr[i]=(arr[i]-mean(arr))/stddev(arr);
    }
    return _arr;
};

//quantile calculator for the given data, q in number (ie. 25, 75)
//adapted from simple statistics with php

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

//obtain outliers in dataset
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
}
