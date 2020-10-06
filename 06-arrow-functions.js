/**
 * Difference between arrow functions and regular functions
 */
    
let talkRegularFunction = function () {
    console.log(this.name + ' meows');
}

let talkArrowFunction = () => {
    console.log(this.name + ' meows');
}

let catCharlie = {
    name: 'Charlie',
    talk: talkRegularFunction,
}

let catFerdinand = {
    name: 'Ferdinand',
    talk: talkArrowFunction,
};

catCharlie.talk();
catFerdinand.talk();