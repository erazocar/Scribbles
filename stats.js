export default class stats {

    constructor(source) {
        this.source= source;
    }
//var isArray = Array.isArray || function isArray(arg) {
//return toString.call(arg) === '[Object Array]'
//

/**
*@param {array} set of values
*@return {Number}
*/

//calculate statistic mean of an array
mean = function(arr) {
    var count = arr.length;
    var sum = Math.sum(arr);
    return sum / count;
};

//calculate the sum of the values of an array
sum = function sum(arr) {
    var sum = 0;
    var i = arr.length;
    while (--i >=0)
        sum += arr[i];
    return sum;
};

//calculate the standard deviation of an array
stddev = function(arr) {
    var sum = this.sum();
    var mean = this.mean();
    var SD = 0;
    var nex =[];
    for(var i=0; i<arr.length; i++){
        nex[i]= Math.pow((arr[i]-mean),2);
    }
    return (Math.sqrt(sum(nex)/arr.length))
}

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
}

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
}

//standardize data
standardize = function(arr) {
    var _arr = [];
    var stddev = this.stddev();
    var mean = this.mean();
    for (var i=0; i<arr.length; i++) {
        _arr[i]=(arr[i]-mean)/stddev;
    }
    return _arr;
}

//quantile calculator for the given data, perc in number (ie. 95%)

quantile = function(arr,perc){
    var _arr=arr.slice();
    _arr.sort(function(a,b){return a-b});
    var quar = 1-perc/100
    
    
}

//obtain outliers in dataset
outliers = function(arr) {
    var thresshold = 2.5
    
}
}
