
var compactObject = function (obj) {
    if (obj === null) return obj;
    if (typeof (obj) !== 'object') return obj;

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);

    }
    const compacted = {};
    for (const key in obj) {
        let values = compactObject(obj[key]);
        if (values) {
            compacted[key] = values;
        }
    }
    return compacted
    
}
