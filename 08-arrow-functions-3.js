/**
 * use case for arrow functions
 */
    
let catCharlie = {
    name: "Charlie",
    talkAfterAWhile: function () {
        let callback = () => {
            console.log(this.name + ' meows');
        };
        setTimeout(callback, 1500);
    }
}

catCharlie.talkAfterAWhile();

let catFerdinand = {
    name: "Ferdinand",
    talkAfterAWhile: function () {
        let callback = function () {
            console.log(this.name + ' meows');
        };
        setTimeout(callback.bind(this), 1500);
    }
}

let hungry = function (food, food2) {
    if (typeof food2 === 'undefined') {
        food2 = ''
    }
    console.log(this.name + ' is hungry for ' + food + ' and ' + food2);
}

hungry.call(catFerdinand, 'chicken');
hungry.apply(catFerdinand, ['beef', 'fish']);