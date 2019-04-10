const BubbleSort = require("./algorithms/BubbleSort");
const InsertionSort = require("./algorithms/InsertionSort");
const MergeSort = require("./algorithms/MergeSort");

const data = [2,6,3,4,5,1];
console.log("Array", data)
console.log("----- BubbleSort -----")
console.log(BubbleSort(data))

console.log("----- InsertionSort -----")
console.log(InsertionSort(data))

console.log("----- MergeSort -----")
console.log(MergeSort(data))

