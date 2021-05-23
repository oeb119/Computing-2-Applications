const first = (array) => {
    return array.splice(0, array.length-1);
};

console.log(first([1,2,3,4,5]));