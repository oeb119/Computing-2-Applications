import { array } from "fast-check";

/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]

// Exam.every_third = function (input) {
//     let thirds = []
//     for (let i=0; i < input.length ; i+=3) {
//         thirds.push(input[i])
//     }
//     return thirds;
// };

//better way (one line using filter) filters all the TRUE values
Exam.every_third = function (array) {
    return array.filter((v, k) => k % 3 === 0);
};


// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (first, second) {
    const words1 = first.split(' ');
    const words2 = second.split(' ');
    if (words1.length !== words2.length) {
        throw 'ValueError';
    }
    return words1.flatMap((v,k) => [v,words2[k]]).join(' ');
        // ALTERNATE USING FOREACH LOOP
        // combined = []
        // words1.forEach(k => {
        //     words2.forEach(i => {
        //         combined.push(k, i)
        //     });
        // });
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (str) {
    const letters = str.split('');
    return letters.filter((l) => l === l.toLowerCase()).length;
};

// ALTERNATE USING FOR LOOP
// Exam.lowercase_count = function (str) {
//     let numb = 0
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (char == char.toLowerCase()) {
//             numb++
//         };
//     };
//     return numb;
// };

// TO TEST:
// console.log(Exam.lowercase_count("heKuenGIU"));

// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function () {
    return;
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.

Exam.value_greatest_even = function (dict) {
    let maxi = 0
    for (let key in dict) {
        if (dict[key] % 2 === 0) {
            if (dict[key] > maxi) {
                maxi = dict[key];
            }
        }
    };
    return maxi;
};

debugger;

// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location = "London") {
    return `Hello, ${username}, how is ${location} ?`;
};

// Try this version without the backtick quotes
// Exam.greeting = function (username, location = "London") {
//     return "Hello, " + username + ", how is " + location + "?";
// };

// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar = 1, offset = 0) {
    let answer = x * scalar + offset
    if (answer > 0) {
        return answer
    } else {
        return 0
    }
};

export default Object.freeze(Exam);
