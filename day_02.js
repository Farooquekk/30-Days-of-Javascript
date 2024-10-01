
/**
 * @param {number} n
 * @return {Function} counter
 */

function outer(n) {
    let count = n
    return function inner() {
        return count++;
    }
}

//
 
//outer(10);
console.log(outer(10));
let funct = outer(10);
funct;
funct();
console.log(funct);

console.log(funct());
console.log(funct());
console.log(funct());
console.log(funct());
console.log(funct());
