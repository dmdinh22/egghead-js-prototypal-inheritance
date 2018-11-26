const obj = {
    firstName: 'David'
};

const protoObj = {
    lastName: 'Dinh'
};

// set protoObj as prototype of object
Object.setPrototypeOf(obj, protoObj);

console.log(obj.lastName);
