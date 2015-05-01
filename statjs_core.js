/**
 * Created by Jay Dee on 30/04/15.
 */

'use strict';

var StatJS = {

};

StatJS.mean = function(inputArray) {
    var t = 0;
    for (var i=0; i < inputArray.length; i++) {
        t += inputArray[i];
    }
    t = t/inputArray.length;
    return t;
}

StatJS.median = function(inputArray) {
    inputArray.sort(function(a, b) { return a-b });
    var t = inputArray.length % 2;
    var r = 0;
    if (t == 0) {
        t = inputArray.length / 2;
        var tA = [inputArray[t-1], inputArray[t]]
        r = this.mean(tA);
    } else {
        t = Math.ceil(inputArray.length / 2) - 1;
        r = inputArray[t];
    }
    return r;
}

StatJS.range = function(inputArray) {
    inputArray.sort(function(a, b) { return a-b })
    return inputArray[inputArray.length-1] - inputArray[0];
};

// n - number of groups
StatJS.mode = function(inputArray, n) {
    var r = this.range(inputArray);
    var s = Math.ceil (r / n);          // size of each group

    var fA = [];                        // frequency Array
    var fdA = [];                       // frequency distribution Array
    fA[0] = Math.floor(inputArray[0]);
    for (var i = 1; i <= n; i++) {
        fA[i] = (Math.ceil(fA[(i-1)]+s));
        fdA[i] = 0;
        for (var j = 0; j <= inputArray.length; j++) {
            if (inputArray[j] > fA[i-1] && inputArray[j] <= fA[i]) {
                fdA[i]++;
            }
        }
    }
    console.log("-frequency: " + fA);
    console.log("-frequency distribution: " + fdA);
    var t = this.findBiggestIndex(fdA);
    console.log("-biggest index: " + t);
    r = ((fA[t]-fA[t-1])/2) + fA[t-1];
    return r;
};

// p - percentile (ex.: 25, 75)
StatJS.percentile = function(inputArray, p) {
    inputArray.sort(function(a, b) { return a-b })
    var r;
    var i = p /100 * inputArray.length;
    console.log("-percentile index: " + i);
    if (StatJS.isInt(i) == true) {
        r = (inputArray[i-1] + inputArray[i]) / 2;
    } else {
        r = inputArray[Math.ceil(i)-1];
    }
    return r;
}

// Standard deviation
StatJS.stdev = function(inputArray) {
    var m = this.mean(inputArray);
    var r = 0;
    for (var i=0; i < inputArray.length; i++) {
        r += (inputArray[i] - m) * (inputArray[i] - m);
    }
    r /= inputArray.length;
    r = Math.sqrt(r);
    return r;
}

// Mean deviation
StatJS.meandev = function(inputArray) {
    var m = this.mean(inputArray);
    var r = 0;
    for (var i=0; i < inputArray.length; i++) {
        r += Math.abs(Math.abs(inputArray[i]) - m);
    }
    r /= inputArray.length;
    return r;
}


// some additional functions
StatJS.findBiggestIndex = function(inputArray) {
    var t = 0;
    var r = 0;
    for (var i = 1; i <= inputArray.length; i++) {
        if (t < inputArray[i]) {
            t = inputArray[i];
            r = i;
        }
    }
    return r;
}

StatJS.isInt = function(n) {
    return n % 1 === 0;
}
