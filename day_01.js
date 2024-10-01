/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function (...args) {
         console.log(args);
        return('Hello World')
    }
};




  const f = createHelloWorld();
//f('My'); // "Hello World"
  console.log(f('My'));
 
