function timeLimit(fn, t) {
    return async function(...args) {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
      });
  
      const fnPromise = fn(...args);
  
      try {
        const result = await Promise.race([fnPromise, timeoutPromise]);
        return result;
      } catch (err) {
        throw err;
      }
    };
  }
  
  // Testing the implementation
  const fn = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
  };
  const inputs = [5];
  const t = 50;
  const limited = timeLimit(fn, t);
  const start = performance.now();
  
  limited(...inputs)
    .then(res => {
      const end = performance.now();
      console.log({"resolved": res, "time": Math.floor(end - start)});
    })
    .catch(err => {
      const end = performance.now();
      console.log({"rejected": err, "time": Math.floor(end - start)});
    });
  
