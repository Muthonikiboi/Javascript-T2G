//Function Definition
const filterandsort =(filterfn, ...numbers)=>{
    return numbers.filter(filterfn).sort();
}
const isEven = (num) => num%2 === 0;
console.log(filterandsort(isEven, 5, 3 , 6 , 8 , 2));

//merge Objects Function
const mergeObjects = (...obj)=>{
    let mergeObjects = {};

    for (i of obj){
        mergeObjects={...mergeObjects, ...i};
    }
    return mergeObjects;
}
const obj1={a:1,b:2};
const obj2={b:3,c:4};
console.log(mergeObjects(obj1, obj2));

//combineArrays Function
const combineArrays =(...arrays)=>{
    let result = arrays.reduce((acc, val) => acc.concat(val));
    let removeDuplicates = new Set(result);

    let array = [];
    for(let item of removeDuplicates){
        array.push(item);
    }
    return array;
}
const arr1=[1,2,3];
const arr2=[3,4,5];
const arr3=[5,6,7];
console.log(combineArrays(arr1, arr2, arr3));

//Extract properties of functions
const extractProperties = function(objects, ...properties) {
    return objects.map(obj => properties.reduce((acc, prop) => {
        acc[prop] = obj[prop];
        return acc;
    }, {}));
}
const objects = [{a: 1, b: 2, c: 3}, {a: 4, b:5, c:6}]
let result3 = extractProperties(objects, 'a', 'b');
console.log(result3);