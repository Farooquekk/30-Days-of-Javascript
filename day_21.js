// solving this Question First using lodash_chunk then without using it

// Lodash :- Lodash is a utility library for js, providing functions to work with arrays, objs, strings etc

// Syntax :- _.chunk(array,size);
// import { chunk } from "lodash";
// //const _ = require("lodash");
// let array = [1, 2, 3, 4, 5, 6];
// // making chunks of size 2
// console.log(chunk(array, 2));

// giving erroe will see this later

var chunk = function(arr, size) {
    
    let result = [];
    for (let i = 0; i < arr.length; i += size){
        result.push(arr.slice(i, i + size));
    }
    return result;
};
let array = [1, 2, 3, 4, 5, 6];
console.log(chunk(array,2));
