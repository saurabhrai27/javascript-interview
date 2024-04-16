// reduce(callbackFn, initialValue)

const arr = [1, 2, 3, 4]

Array.prototype.myReduce = function(callback, initialValue) {
    if (typeof callback !== 'function') {
        throw Error(`${callback} is not a function`);
    }

    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const result = arr.myReduce((accumulator, currentValue, index, arr) => {
    return accumulator + currentValue
}, 0)

console.log(result);