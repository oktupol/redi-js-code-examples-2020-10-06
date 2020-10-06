/**
 * Objects
 */
    
let myObject = {
    myFirstProperty: 'hello',
};

myObject['mySecondProperty'] = 'hi';

delete myObject.mySecondProperty;

console.log(myObject);



let object1 = {
    a: 'content',
    b: 'another field',
};

let object2 = object1;
let object3 = {...object1};

object2.a += ' some changes';

console.log(object1);
console.log(object2);
console.log(object3);

let string1 = 'content';
let string2 = string1;

string2 += ' some changes';
console.log(string1);
console.log(string2);