// Rule2: Remove constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++) {
      console.log('hi');
  }
}
// Simplifying answer
// O(1 + 1 + 1 + n/2 + 100)
// O(n/2 + 101)
// O(n + 1)
// O(n)

let n = 0;

while (n < 3) {
  n++;
}

console.log(n); // expected output: 3
// Simplifying answer
// O(1 + 1 + 1 + 1 )
// O(4)
// O(1)
