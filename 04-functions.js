/**
 * Using functions in objects
 */

let catCharlie = {
    name: "Charlie",
    age: 8,

    talk: function () {
        console.log(this.name + ' meows.');
    }
}

let copyOfCharlie = catCharlie;
catCharlie = null;

copyOfCharlie.talk();