
Array.prototype.groupBY = function (fn) {
    return this.reduce((grouped, items) => {
        const key = fn(items);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(items);
        return grouped;
    }, {})
    
};

array = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ], 
  fn = function (item) { 
    return item.id; 
    }
let result = array.groupBY(fn);
console.log(result);
