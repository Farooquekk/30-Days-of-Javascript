/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let copy = init;
    return {
        increment:function(){
            return ++copy;
        },
        reset:function(){
            copy=init;
            return copy;
        },
        decrement:function(){
            return --copy;
        }
        
    }


    
};


  const counter = createCounter(5)
  console.log( counter.increment()); // 6
  console.log( counter.reset()); // 5
  console.log( counter.decrement()); // 4
 
