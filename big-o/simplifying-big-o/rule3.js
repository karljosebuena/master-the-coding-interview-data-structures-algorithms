// Rule3: Different terms for inputs
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(box => {
    console.log(box)
  });

  boxes2.forEach(box => {
    console.log(box)
  });
}

compressBoxesTwice([1,2,3,4,5], [5,5,5])

// Simplifying answer
// O(2n)
// O(n) ---> wrong

// O(a + b) ---> correct answer (a and b are just arbitrary)