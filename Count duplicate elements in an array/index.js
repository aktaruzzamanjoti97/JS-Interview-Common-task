// Count duplicate elements in an array
const array = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

const count = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(count); // { '1': 1, '2': 2, '3': 1, '4': 2, '5': 3, '6': 1 }