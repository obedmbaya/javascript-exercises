const removeFromArray = function(array, ...Args) {
    let arr = array;
    for (let i = 1; i < arguments.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arguments[i] === arr[j]) {
                arr.splice(j,1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
