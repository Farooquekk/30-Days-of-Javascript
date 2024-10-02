
class Cache{
    constructor() {
        this.map = new Map();
    }


    set(key, value, duration) { 

        const exist = this.map.get(key);
        if (exist) {
            clearTimeout(exist.setTimeOutID);
        }
        
        const setTimeOutID = setTimeout(() => {
            this.map.delete(key);
        }, duration);
        this.map.set(key, { value, setTimeOutID });
        return Boolean(exist);
    }




    get(key) {
        if (this.map.has(key)) {
            return this.map.get(key).value;
        }
        return -1;
    }
    



    count() {
        return this.map.size;
     }
}


const obj1 = new Cache();
obj1.set("name", "Faooque", 2000);
obj1.set("age", "22", 2000);
obj1.set("semester", 4, 2000);

console.log(obj1.get("name"));
console.log(obj1.get("age"));
console.log(obj1.get("semester"));
console.log(obj1.count());
