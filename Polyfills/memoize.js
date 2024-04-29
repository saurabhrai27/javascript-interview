
function memoize (fn) {
    const cache = new Map();
    return (...args) => {
        const argsToStrings = fn.name + JSON.stringify(args);
        if(cache.has(argsToStrings)) {
            return cache.get(argsToStrings)
        } else {
            const result = fn.apply(this, args)
            cache.set(argsToStrings, result);
            return result;
        }
    }
}

const addThreeNums = (a,b,c) => a+b+c
const add = memoize(addThreeNums)
console.log(add(1,2,3));
console.log(add(1,2,3));