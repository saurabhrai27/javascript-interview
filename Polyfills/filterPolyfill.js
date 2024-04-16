const arr = [2, 4, 6, 9, 11, 14]

Array.prototype.myFilter = function(callBack) {
    if(typeof callBack !== 'function') {
        throw Error(`${callBack} is not a function`)
    }
    
    const resultArray = [];

    for(let i = 0; i < this.length; i++) {
        if(callBack(this[i], i, this)) {
            resultArray.push(this[i])
        }
    }

    return resultArray
}

const result = arr.myFilter( (item, index) => {
    if(item % 2 === 0) return item
})

console.log(result);