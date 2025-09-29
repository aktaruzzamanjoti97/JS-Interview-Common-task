// what will be the output of below code?
// function myFunction() {
//     return 'Bangladesh';
// }

// const string = myFunction`hello `;
// console.log(string); // Bangladesh

const myFunction = function () {
    return [].slice.call(arguments).sort()
}

console.log(myFunction(3, 2, 1, 4));
// output: [1, 2, 3, 4]