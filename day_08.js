/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function(functions) {
    
    return function(x) {
        
   for(let i=functions.length-1;i>=0;i--){
    if(functions.length===0) return x;
     x = functions[i] (x);
   }
   return x;


    }
};


  const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(4));
 
