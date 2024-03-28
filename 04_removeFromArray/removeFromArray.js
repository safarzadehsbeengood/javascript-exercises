const removeFromArray = function(arr, ...targets) {
    for (target of targets) {
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] === target) {
            arr.splice(i, 1);
        }
    }
}
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
