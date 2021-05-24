const List = Object.create(null);

// Figure out how Harris' Transpose one works
// Curried version of map
// Reject Function







// Returns a new array with entries from 0 to n-1
List.sequence = (n) => {
    let arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(i);
    };
    return arr;
}; //Works

// Transposes a 2×2 array (swaps rows and columns).
List.transpose = (array) => {
    const first = array[0][1];
    array[0][1] = array[1][0];
    array[1][0] = first;
    return array;
}; //Works

// List.transpose = (list) => list[0].map(
//     (ignore, colIndex) => list.map((row) => row[colIndex])
// );

// Returns an array with equally spaced entries 
// starting at start and ending at end (exclusive) 
// in steps of step. 
// i.e. range(2, 5, 0.5) = [2, 2.5, 3, 3.5, 4, 4.5].
List.range = (start, end, step) => {
    let arr = [];
    for (var i = start; i < end ; i += step) {
        arr.push(i);
    };
    return arr;
}; //Works

// Write curried versions of map, includes, filter, 
// every, some, flat_map – i.e. for map, write a function 
// with the signature map = (function) => (array) => array, 
// that on its first call takes a function, and on its second 
// takes an array and returns that function mapped to the array.

// List.map = (function) => (array) => array.map(function);
// List.includes = (function) => (array) => array.includes(function);
// List.filter = 
// List.every = 
// List.some
// List.flat_map

list.curried_map()()

List.curried_map = function (fun) {
    return function (array) {
        var i = 0;
        const len = array.length;
        while (i < len) {
            array[i] = fun(array[i]);
            i += 1;
        }
        return array;
    };
};

// write reject = (function) => (array) => array, which is the 
// oposite of filter, e.g. removes all values for which the function 
// returns true.
List.reject = (funct, array) => {
    const new = [];
    array.push(array.filter(array => array.map(funct) === true));
    return array.map(x => array[x] in new);
};

// List.reject = function (condition_function) {
//     return function (array) {
//         const return_array = [];
//         var i = 0;
//         const len = array.length;
//         while (i < len) {
//             if (condition_function(array[i]) === false) {
//                 return_array.push(array[i]);
//             }
//             i += 1;
//         }
//         return return_array;
//     };
// };

// write first = (array) => element that returns the first element 
// of the array, also write last
List.first = (array) => {
    return array[0];
}; //Works

List.last = (array) => {
    return array.splice(array.length-1, 1);
}; //Works

// rest = (array) => array, return an array with the first element 
// removed.
List.rest = (array) => {
    return array.splice(1,array.length-1);
}; //Works

// most = (array) => array, return an array with the last element removed.
// zip = (function) => (array) => (array) => array, Zip is a 
// function like map but that applies to two arrays. 
// E.g. zip(g)([a, b, c])([x, y, z]) would return [g(a, x), g(b, y), g(c, z)].
List.most = (array) => {
    return array.splice(0, array.length-1);
}; //Works

List.zip = function => (array1 => array1.map(function))
 => (array2) =>











const new_array = Array;
List.sequence = (n) => new_array(n).fill().map((ignore, k) => k);

List.transpose = (list) => list[0].map(
    (ignore, colIndex) => list.map((row) => row[colIndex])
);

export default Object.freeze(List);
