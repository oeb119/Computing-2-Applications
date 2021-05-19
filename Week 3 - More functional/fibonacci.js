// FACTORIAL
// FACTORIAL RECURSION FROM YOUTUBE VIDEO
// const factorial = (n) => {
//     if (n<2) {
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// OPTIMIZED VERSION
// const factorial = (n, accum = 1) => {
//     if (n<2) {
//         return accum;
//     }
//     return factorial( n-1 , n*accum );
// }



// FIBONACCI
// NOT REALLY OPTIMIZED WAY
// const fibonacci = (n, accum = 0) => {
//     if (n<1) {
//         return accum;
//     }
//     return fibonacci(n-1,n+accum);
// }

// NOT OPTIMIZED WAY
// const fibonacci = (n) => {
//     if (n<1) {
//         return 0
//     }
//     return n+fibonacci(n-1);
// }


// LUCAS
const lucas = (n) => {
    if (n==1) {
        return 1;
    }
    if (n==0) {
        return 2;
    }
    return lucas(n-2) + lucas(n-1);
}