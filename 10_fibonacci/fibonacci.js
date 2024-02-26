const fibonacci = function(num) {
    if(parseInt(num) != num) return "OOPS";
    if(num == 0) return 0;
    if(num < 0) return 'OOPS';

    let array = [1,1];
    for (let i = 1; array.length < num; i++) {
       array.push(array[i] + array[i-1]);
    }

    return array[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;



console.log(fibonacci("yee"))