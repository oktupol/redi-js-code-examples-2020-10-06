/**
 * Variable visibility
 */
    
let myVariable = 123;

function doubleIt() {
    myVariable = myVariable * 2;
}

doubleIt();
console.log(myVariable);

function doubleItAgain() {
    let myOtherVariable = 456;
    myOtherVariable = myOtherVariable * 2;
}

doubleItAgain();
console.log(myOtherVariable);