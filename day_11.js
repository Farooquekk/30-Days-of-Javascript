
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let counter = 0;
    
    const memoizedFn = function(...args) {
        const key = JSON.stringify(args);
        //console.log(key);
        if(!cache.has(key)){
            cache.set(key,fn(...args));
            counter++;
        }
        return cache.get(key);
    }
    memoizedFn.getCallCount = () => counter;
    return memoizedFn;
}

const sum = (a,b)=> a+b;
const fibonachi = (n)=> n<=1?1:fibonachi(n-1)+fibonachi(n-2);
const factorial = (n) => n<=1?1:n*factorial(n-1);


 
const result1 = memoize(sum);
console.log(result1.getCallCount());
console.log(result1(2,1));
console.log(result1(1, 2));
console.log(result1.getCallCount());

const result2 = memoize(fibonachi);
console.log(result2.getCallCount());
console.log(result2(10));
console.log(result2(0));
console.log(result2(10));
console.log(result2.getCallCount());

const result3 = memoize(factorial);
console.log(result3.getCallCount());
console.log(result3(10));
console.log(result3(0));
console.log(result3(10));
console.log(result3.getCallCount());


 
