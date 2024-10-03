
var join = function (array1, array2) {
    let result = {};
    for (let i = 0; i < array1.length; i++){
        result[array1[i].id] = array1[i];
    }

    for (let i = 0; i < array2.length; i++){
        if (result[array2[i].id]) {
            for (const key in array2[i]) {
                result[array2[i].id][key] = array2[i][key];
            }
        } else {
            result[array2[i].id] = array2[i];
                
            }
        
    }
    return Object.values(result);
}
