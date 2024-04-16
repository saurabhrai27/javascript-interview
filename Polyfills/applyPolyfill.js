
Function.prototype.myApply = function (context = {}, agrs = []) {
    if(typeof this !== 'function') {
        throw new TypeError(this + 'is not a function')
    }

    if(!Array.isArray(agrs)) {
        throw new TypeError('CreateListFromArrayLike called on non-object')
    }

    context.fn = this
    const result = context.fn(...agrs)
    delete context.fn
    return result
}

let nameObj = { 
    name: "Tony"
} 
  
let PrintName = { 
    name: "steve", 
    sayHi: function (...age) { 
        console.log(this.name + " age is " + age); 
    } 
} 
PrintName.sayHi.myApply(nameObj, [42]);