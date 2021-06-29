let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.slice(2,3).startsWith(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.substring(word.length - 1, word.length).startsWith(letterO.toLowerCase())); // True
