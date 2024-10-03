
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.slice().sort((a,b)=>fn(a)-fn(b));
    
};

let arr = [5,4,1,2,3];
let fn = x=>x*2;

let sorted = sortBy(arr,fn);
console.log(sorted);
