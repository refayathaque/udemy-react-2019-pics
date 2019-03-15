import React from 'react';

// JS map function will iterate over an array, and will return a brand new array (it will not mutate the array it is iterating over). The map function will then take each element in the brand new array and modify them in some way. The map function essentially achieves the same result ascif you used a JS for loop to take element values from one array, modify them, and push them into a new array, all without mutating the original array
// const numbers = [0, 1, 2, 3, 4];
// let newNumbers = []
// for (let = 1; 1 < numbers.length; i++) {
//   newNumbers.push(numbers[i] * 10);
// }

const ImageList = ({ images }) => {
  console.log(images)
  return <div>ImageList</div>
};

export default ImageList;
