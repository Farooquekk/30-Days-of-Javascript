/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    
    let copy = [];
    for(let i=0;i<arr.length;i++){
        copy[i] = fn(arr[i], i);
        
    }
    return copy;
};

function greaterThan10(n){
    return n>10;
}

function firstIndex(n,i){
    return i===0;
}
function plusOne(n){
    return n+1;
}

let arr1 = [0,10, 20, 30];
let sol1 = filter(arr1, greaterThan10);
let arr2 = [1, 2, 3];
let sol2 = filter(arr2, firstIndex);

let arr3 = [-2, -1,0,1,2 ];
let sol3 = filter(arr3, plusOne);

console.log(sol1);
console.log(sol2);
console.log(sol3);
