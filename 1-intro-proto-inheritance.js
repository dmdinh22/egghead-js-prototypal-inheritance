/* eslint-disable no-console */
const obj = {
    firstName: 'David'
};

console.log(obj.toString());

function Foo() {
    // code
}

// Foo.prototype= {}

console.log(Foo.prototype.constructor);

const a = new Foo();

console.log(a.constructor === Foo);

const house = {
    set houseColor(color) {
        this.color = color;
    }
};

const myHouse = Object.create(house);

console.log((myHouse.color = 'white'));
console.log(myHouse);
