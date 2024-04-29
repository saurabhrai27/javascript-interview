const expensiveFunction = () => {
  console.log('Expensive');
}

const throttling = function (fn, limit) {
  let flag = true;
  return function () {
    if(flag) {
      fn.apply(this, arguments);
      flag = false
      setTimeout(() => {
        flag = true
      },limit)
    }
  }
}

const throttledFunc = throttling(expensiveFunction, 2000);

setInterval(() =>{
  throttledFunc()
},100);