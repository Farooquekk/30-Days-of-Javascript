/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    let result ;
    return function(...args){
        if(!called){
            called=true;
            result = fn(...args);
            return result;
        }
        else{
            return undefined;
        }
    };
    
    
}

function fn1 (n1,n2,n3){return (n1+n2+n3);}
function fn2(n1,n2,n3){return (n1*n2*n3);}


let result = once(fn1);
console.log(result(1,2,3));
console.log(result(3, 4, 5));

let result2 = once(fn2);
console.log(result(1,2,3));
console.log(result(3, 4, 5));
