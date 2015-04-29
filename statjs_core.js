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
    StatJS.quicksort(inputArray);
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

StatJS.quicksort = function(inputArray) {

}