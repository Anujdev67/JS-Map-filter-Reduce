const arr = [5, 1, 3, 2, 6];
// function double(x){
//     return x*2;
// }

// const output = arr.map(function binary(x){
//     return x.toString(2);
// } );

// console.log(output);
//filter odd values
// const output = arr.filter((x) =>x>4);
// console.log(output);
// function isOdd(x){
//     return x%2;
// }
// const output = arr.filter(isOdd);
// console.log(output);
//reduce to work sum or max
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));
const output = arr.reduce(function (acc, curr) {
  //curr = arr[i] ,acc= sum
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);
