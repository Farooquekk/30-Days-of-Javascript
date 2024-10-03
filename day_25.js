
var flat = function (arr, n) {
    if (n === 0) {
        return arr.slice();
    }
    let flatArray = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            const nested = flat(arr[i], n - 1);
            flatArray.push(...nested);
            
        } else {
            flatArray.push(arr[i]);
        }
    }
    return flatArray;
}

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 0;
let array = flat(arr, n);
console.log(...array);
