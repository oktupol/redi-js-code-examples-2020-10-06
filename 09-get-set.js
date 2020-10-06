/**
 * getters and setters
 */
    
let catCharlie= {
    name: 'Charlie',
    birthday: new Date('2012-06-01'),

    get age() {
        const today = new Date();
        const difference = today - this.birthday; // difference in milliseconds
        
        return Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    },
    
    set age(newAge) {
        const newBirthday = new Date();
        newBirthday.setFullYear(newBirthday.getFullYear() - newAge);
        
        this.birthday = newBirthday;
    }
};

console.log(catCharlie.age);

catCharlie.birthday = new Date('2016-06-05');
console.log(catCharlie.age);

console.log(catCharlie.birthday);
catCharlie.age = 7;
console.log(catCharlie.birthday);