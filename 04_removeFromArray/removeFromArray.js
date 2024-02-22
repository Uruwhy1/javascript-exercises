const removeFromArray = function(array, ...removedItems) {
    return array.filter(item => !removedItems.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;

