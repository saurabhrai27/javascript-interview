
Function.prototype.myCall = function (context = {}, ...agrs) {

    if(typeof this !== 'function') {
        throw new TypeError(this + ' is not a function')
    }
   
    context.fn = this
    const result = context.fn(...agrs)
    delete context.fn // Clean up added property
    return result
}



let nameObj = { 
    name: "Tony"
} 
  
let PrintName = { 
    name: "steve", 
    sayHi: function (age) { 
        console.log(this.name + " age is " + age)
    } 
} 
  
PrintName.sayHi.myCall(nameObj, 42);
