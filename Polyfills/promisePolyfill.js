function MyPromise(executor) {
    let onResolve;
    let onReject;
    let isFulfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;
    let error;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function' && !isCalled) {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(err) {
        isRejected = true;
        error = err;
        if (typeof onReject === 'function' && !isCalled) {
            onReject(err);
            isCalled = true;
        }
    }

    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if (!isCalled && isFulfilled) {
            onResolve(value);
            isCalled = true;
        }
        return this;
    };

    this.catch = function (catchHandler) {
        onReject = catchHandler;
        if (!isCalled && isRejected) {
            onReject(error);
            isCalled = true;
        }
        return this;
    };

    executor(resolve, reject);
}

MyPromise.resolve = (val) => {
    return new MyPromise(function executor(resolve, reject) {
        resolve(val);
    });
};

MyPromise.reject = (err) => {
    return new MyPromise(function executor(resolve, reject) {
        reject(err);
    });
};


const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, MyPromise!");
    }, 1000);
});

promise.then(result => {
    console.log(result); // "Hello, MyPromise!"
}).catch(error => {
    console.error(error);
});
