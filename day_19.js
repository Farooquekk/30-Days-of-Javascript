/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
     
     let arrayRes = Array(functions.length);
     let waiting = functions.length;
     for(let i=0;i<functions.length;i++){
        functions[i]().then((result)=>{
            arrayRes[i] = result;
            waiting--;
            if(waiting===0) resolve(arrayRes);
        }).catch(reject);
     }
    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
