
const arr = [1, 2, 3, 4]

Array.prototype.myMap = function(callBack) {
    if(typeof callBack !== 'function') {
        throw Error(`${callBack} is not a function`)
    }

    const resultArray = [];

    for(let i = 0; i < this.length; i++) {
        resultArray.push(callBack(this[i], i, this))
    }

    return resultArray;
}

const result = arr.myMap((item, index) => item * index) 
console.log(result);