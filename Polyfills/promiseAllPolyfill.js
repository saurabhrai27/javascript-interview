const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2");
    }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2");
    }, 100);
})

Promise.myall = function (promises) {
    let result = [];
    let count = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((res) => {
                count++;
                result[index] = res;
                if(count === promises.length) {
                    resolve(result)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

Promise.myall([promise1, promise2]).then( res => console.log).catch(console.log);