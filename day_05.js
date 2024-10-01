/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let copy = [];
    for(let i=0;i<arr.length;i++){
     copy[i]=fn(arr[i],i);
  
    }
    return copy;  
  };
  
  function plusOne(n){
      return (n+1);
  }
  function plusI(n,i){
      return (n+i);
  }
  function constant (){
      return 42;
}
  
let arr1 = [1, 2, 3];
let sol1 = map(arr1, plusOne);
let sol2 = map(arr1, plusI);

let arr3 = [10, 20, 30];
let sol3 = map(arr3, constant);

console.log(sol1);
console.log(sol2);
console.log(sol3);


