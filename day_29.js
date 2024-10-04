class ArrayWrapper {
    constructor(arr) {
        this.arr = arr;
    }

    
    valueOf() {
        return this.arr.reduce((sum, num) => sum + num, 0);
    }

    
    toString() {
        return `[${this.arr.join(',')}]`;
    }
}


const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); 

const obj = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj)); 

const obj3 = new ArrayWrapper([]);
const obj4 = new ArrayWrapper([]);
console.log(obj3 + obj4); 
