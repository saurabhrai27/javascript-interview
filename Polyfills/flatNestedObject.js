// flatten nested objects with keys represented as dot-separated strings

function flatNestedObjects(obj, parentKey = '') {
    let result = {}

    for (const key in obj) {
        newKey = parentKey ? `${parentKey}.${key}` : key

        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const flattenedObj = flatNestedObjects(obj[key], newKey)
            result = {...result, ...flattenedObj}
        } else {
            result[newKey] = obj[key]
        }
    }

    return result
}

const nestedObject = {
    a: 1,
    b: { c: 2, d: { e: 3, f: 4 } },
    g: { h: { i: 5 } },
  };
  
  const flatResult = flatNestedObjects(nestedObject);
  console.log(flatResult);

// Type 2 with out parent key

function flatNestedObjects2(obj) {
    let result = {}

    for (const key in obj) {
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const flattenedObj = flatNestedObjects2(obj[key])
            result = {...result, ...flattenedObj}
        } else {
            result[key] = obj[key]
        }
    }

    return result
}

console.log('Type 2');
const flatResult2 = flatNestedObjects2(nestedObject);
console.log(flatResult2);