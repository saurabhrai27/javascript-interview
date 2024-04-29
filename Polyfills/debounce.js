let counter = 0;

const getData = () => {
    console.log(`Fething data from api ${counter}`);
    counter++;
}

const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, d)
    }
}

const debounceGetData = debounce(getData, 2000);

debounceGetData()

setTimeout(()=> {
    debounceGetData()
}, 1000)

setTimeout(() => {
    console.log('Next call');
    debounceGetData()
}, 4000)
