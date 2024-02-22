const sumAll = function(min,max) {

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (min > max) [min, max] = [max, min];

    let result = min;
    for (let i = max; i > min; i--) {
        result += i;
    }
    
    return result;

};

// Do not edit below this line
module.exports = sumAll;
