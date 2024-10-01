/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let copy = init;
    for(let i=0;i<nums.length;i++){
        if(nums.length===0) return init;
         copy = fn(copy,nums[i])
    }
    return copy;
    
};

function sumFunction(a,b){
    return a+b;
}

let array1 = [1, 2, 3, 4];
let array2 = [];

let solution1 = reduce(array1, sumFunction, 0);
console.log(solution1); 
let solution2 = reduce(array1, sumFunction, 100);
console.log(solution2); 
let solution3 = reduce(array2, sumFunction, 0);
console.log(solution3); 
let solution4 = reduce(array2, sumFunction, -100);
console.log(solution4); 


