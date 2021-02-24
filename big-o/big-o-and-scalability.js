const nemo = ['nemo'];
const large = new Array(100000).fill('nemo');

function findNemo(array) { // O(n) --> Linear Time
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}
findNemo(large);

const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes) { // O(1) --> Constant Time
  console.log(boxes[0]);
  console.log(boxes[1]);
}
logFirstTwoBoxes(boxes);
