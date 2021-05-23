const transpose = (list) => list[0].map(
    (ignore, colIndex) => list.map((row) => row[colIndex])
);

console.log(transpose([[1,2],[3,4]]));