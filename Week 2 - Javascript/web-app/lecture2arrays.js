const students = [
    {"name": "Alex", "elective": "Design Psychology"},
    {"name": "Bobby", "elective": "Additive Manufacture"},
    {"name": "Charlie", "elective": "Design Psychology"},
    {"name": "Dale", "elective": "Additive Manufacture"},
    {"name": "Eli", "elective": "Additive Manufacture"},
    {"name": "Frankie", "elective": "Design Psychology"}
];

// const psychology_students = students.filter(
//     function (student) {
//         return student.elective === "Design Psychology";
//     }
// ).map(
//     function (s) {
//         return s.name;
//     }
// );

// console.log(psychology_students);


//Without return statements using the arrow instead (shorthand)
const psychology_students = students.filter(
    (student) => student.elective === "Design Psychology";
).map(
    function (s) => s.name
);

console.log(psychology_students);


debugger;

const ints = [
    1, 2, 3, 4, 5
];

const sum = ints.reduce(
    function (accumulator, current_value) {
        return accumulator + current_value;
    }
);

const hello_lyrics = words.map(
    function (word) {
        return word + " ";
    }
);