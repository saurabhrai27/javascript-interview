// Q1: 

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

const curriedResult = curriedAdd(1)(2)(3); // Output: 6
console.log(curriedResult);

// Q2:
function evaluate(operation) {
    return (a) => {
        return (b) => {
        if(operation === "sum")
                  return a + b;
                    else if(operation === "multiply")
                    return a * b;
                    else if(operation === "divide")
                    return a / b;
                    else if(operation === "subtract")
                    return a - b;
                    else return "No / Invalid Operation Selected"
        }
    }
}
const mul = evaluate("multiply");
console.log(mul(3)(5));

//Q3: Write a currying function that takes infinite arguments.
function infiniteAdd(a) {
    return function(b) {
        if(b) {
            return infiniteAdd(a + b);
        } else  return a;
    }
}

console.log(infiniteAdd(5)(2)(4)(8)()); // 19

// Q4: Partial application

function sum(a) {
    return function(a , b) {
        return a + b + c
    }
}

const x = sum(5);
console.log(x(5,5));

// Q4: Write a function curry() that converts f(a,b,c) into a curried function f(a)(b)(c)

function curry(func) {
    // args takes arguments in the form of array eg - [a, b, c]
    return function curriedFunc(...args) {
      //check if current args passed equals the number of args function expects 
      if(args.length >= func.length) {
        // if yes, we spread args elements to pass into func (spread). This is our base case.
        return func(...args)
      } else {
        /* if not, we return a function that collects the next arguments passed in next and 
        we recursively call curriedFunc, accumulating and spreading the values of args first and then
        the values of next. next will take into consideration a variable amount of next arguments
        e.g (1, 2) (1) (1,2,3) */
        return function(...next) {
          return curriedFunc(...args,...next);
        }
      }
    }
  }
  
  const join = (a, b, c) => {
     return `${a}_${b}_${c}`
  }
  const curriedJoin = curry(join)
  
  // curriedJoin(1, 2, 3) // '1_2_3'
  
  // curriedJoin(1)(2, 3) // '1_2_3'
  
  curriedJoin(1, 2)(3) // '1_2_3'
  