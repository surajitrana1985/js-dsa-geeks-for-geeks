/**
 * Lecture Problem 1: 1Search an item in an unsorted array
 * input 1: arr = [20, 5, 7, 25], x = 5
 * output: 1
 * input 2: arr = [20, 5, 7, 25], x = 15
 * output: -1
 */

function search(sequence, item) {
    var index = -1;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] === item) {
            index = i;
            break;
        }
    }
    return index;
}

var arr = [20, 5, 7, 25];
var x = 5;
var output1 = search(arr, x);
console.log(`Output 1: ${output1}`);

var x = 15;
var output2 = search(arr, x);
console.log(`Output 2: ${output2}`);
