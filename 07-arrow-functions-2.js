
let catCharlie = {
    name: 'Charlie',
    initialize: function () {
        this.talkRegular = function () {
            console.log(this.name + ' meows');
        }
        this.talkArrow = () => {
            console.log(this.name + ' meows');
        }
    }
}

let catFerdinand = {
    name: 'Ferdinand',
};

catCharlie.initialize();
catFerdinand.talkRegular = catCharlie.talkRegular;
catFerdinand.talkArrow = catCharlie.talkArrow;

catCharlie.talkRegular();
catCharlie.talkArrow();
catFerdinand.talkRegular();
catFerdinand.talkArrow();