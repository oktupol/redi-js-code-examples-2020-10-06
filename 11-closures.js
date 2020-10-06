/**
 * Closures
 */
    
let createCat = function (name, birthday) {
    return {
        name: name,
        
        get age() {
            const today = new Date();
            const difference = today - birthday; // difference in milliseconds
            
            return Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        },

        talk: function () {
            console.log(this.name + ' meows');
        }
    };
}

let catCharlie = createCat('Charlie', new Date('2012-06-01'));
let catFerdinand = createCat('Ferdinand', new Date('2012-06-01'));

console.log(catCharlie.age);
console.log(catFerdinand.age);

console.log(catCharlie.talk === catFerdinand.talk);

// IIFE: Immediately invoked function expression
(() => {
    let field = 'something';
    
    let myFunction = function () {
        // do something
    }
})();