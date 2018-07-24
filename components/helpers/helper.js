export function cloneObject(obj) {
    var clone = JSON.parse(JSON.stringify(obj));
    return clone;
}