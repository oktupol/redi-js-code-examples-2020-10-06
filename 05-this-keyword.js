/**
 * this - keyword
 */
let talk = function () {
    console.log(this.name + ' meows.');
}
    
let catCharlie = {
    name: 'Charlie',
    talk: talk,
}

let catFerdinand = {
    name: 'Ferdinand',
    talk: talk,
};

catCharlie.talk();
catFerdinand.talk();

talk();