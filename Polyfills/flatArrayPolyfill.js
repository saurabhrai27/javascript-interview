const arr = [1,2,[3, 4, [5,6], 7, [8, [9,10,11, [12, 13, [14, 15]]]]]]

Array.prototype.flatArray = function () {
    const result = []

    function flattenArray(arr) {
        for(const item of arr) {
            if(Array.isArray(item)) {
                flattenArray(item)
            } else {
                result.push(item)
            }
        }
    }

    flattenArray(this)
    return result
}

console.log(arr.flatArray());

// Type 2 with depth 

Array.prototype.flatArrayWithDepth = function(depth = 1) {
    const flattenedArray = [];
    function flatten(arr, currentDepth) {
        for (let item of arr) {
            if (Array.isArray(item) && currentDepth < depth) {
                flatten(item, currentDepth + 1);
            } else {
                flattenedArray.push(item);
            }
        }
    }
    flatten(this, 0);
    return flattenedArray;
};
console.log("Type 2");
console.log(arr.flatArrayWithDepth(2));
