/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timer = setTimeout(()=>{
     fn(...args);
    },t);
    return function cancelFn(){
        clearTimeout(timer);
    }
    
};


  const result = [];

  const fn = (x) => x * 5;
  const args = [2], t = 20, cancelTimeMs = 50;

const start = performance.now();
  console.log(start);

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        console.log(diff);
       result.push({"time": diff, "returned": fn(...argsArr)});
  }
        
    const cancel = cancellable(log, args, t);
 
   const maxT = Math.max(t, cancelTimeMs);
            
   setTimeout(cancel, cancelTimeMs);
 
   setTimeout(() => {
       console.log(result); // [{"time":20,"returned":10}]
   }, maxT + 15)
 
