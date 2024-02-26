const findTheOldest = function(array) {
    array.map(function(current) {
        if(!current.yearOfDeath) {current.yearOfDeath = new Date().getFullYear();}
    })
    return array
            .sort( (b, a) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth))[0]
}
// Do not edit below this line
module.exports = findTheOldest;




// yearOfBirth and yearOfDeath
// if yearOfDeath is empty == compare to current year
// if not == yOD - yOB;
