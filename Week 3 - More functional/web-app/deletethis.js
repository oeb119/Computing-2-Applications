const range = (start, end, step) => {
    let arr = [];
    for (var i = start; i < end ; i += step) {
        arr.push(i);
    };
    return arr;
};

console.log(range(2,5,0.5));

