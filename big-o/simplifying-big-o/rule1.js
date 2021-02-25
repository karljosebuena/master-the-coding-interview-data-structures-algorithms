// Rule1: Worst Case
const nemo = ['nemo'];
const everyone = ['dore', 'bruce', 'marlin', 'gill',
'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo']
const large = new Array(100000).fill('nemo');

function findNemo(array) { // O(n) --> Linear Time
  for (let i = 0; i < array.length; i++) {
    console.log('searching...')
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}
findNemo(everyone); // O(n)
