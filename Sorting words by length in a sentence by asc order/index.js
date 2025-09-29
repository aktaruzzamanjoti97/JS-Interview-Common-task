// Sorting words by length in a sentence by asc order
const sentence = "I love programming in JavaScript";
const sorted = sentence.split(" ").sort((a, b) => a.length - b.length).join(" ");
console.log(sorted); // I in love JavaScript programming