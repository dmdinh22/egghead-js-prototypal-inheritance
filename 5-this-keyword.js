function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
};

function Bar(name) {
    Foo(name);
}

const a = new Bar('tyler');

console.log(a.myName()); // a.myName is not a function
