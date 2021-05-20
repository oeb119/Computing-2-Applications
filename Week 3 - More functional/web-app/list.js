const List = Object.create(null);

List.sequence = (number) => new Array(number-1);




















const new_array = Array;
List.sequence = (n) => new_array(n).fill().map((ignore, k) => k);

List.transpose = (list) => list[0].map(
    (ignore, colIndex) => list.map((row) => row[colIndex])
);

export default Object.freeze(List);
