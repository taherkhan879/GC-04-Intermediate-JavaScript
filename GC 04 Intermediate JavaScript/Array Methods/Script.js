// 1. Square of each element in Array A
let A = [2, 5, 4, 7, 3];

let B = A.map(num => num * num);
console.log("Squared Array B:", B);


// 2. Addition of all elements in Array C
let C = [45, 2, 4, 7, 85];

let sum = C.reduce((total, num) => total + num, 0);
console.log("Sum of Array C:", sum);


// 3. Find duplicate elements in Array D
let D = [4, 8, 6, 4, 8, 6, 1, 2, 9];

let duplicates = D.filter((item, index) => D.indexOf(item) !== index);
let uniqueDuplicates = [...new Set(duplicates)];

console.log("Duplicate elements in Array D:", uniqueDuplicates);
