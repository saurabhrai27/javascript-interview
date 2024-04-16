
Function.prototype.myBind = function(context = {}, ...agrs) {
    if(typeof this !== 'function') {
        throw new TypeError(this + " is not a function")
    }

    context.fn = this;
    return function (...newAgrs) {
        return context.fn(...agrs, ...newAgrs)
    }
}

function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

const person = {
    name: 'John'
};

const boundGreet = greet.myBind(person, 'Hello');

boundGreet(); 

function sum(a, b, c) {
    return this.multiplier * a + b + c;
}

const context = { multiplier: 2 };
const boundSum = sum.myBind(context, 2);

console.log(boundSum(3, 4));
