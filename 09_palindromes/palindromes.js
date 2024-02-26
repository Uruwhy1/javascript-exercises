const palindromes = function (string) {
    const formatString = string.toLowerCase().replace(/[^a-z\d:]/g, "")   

    return formatString.split("").reverse().join("") == formatString ? true : false;

};


// Do not edit below this line
module.exports = palindromes;


console.log(palindromes('A car, a man, a maraca.'))