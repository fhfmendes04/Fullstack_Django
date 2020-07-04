var myObj = new Map();

var a = {myValue: 1},
    b = {myValue: 2};

myObj.set(a, 5);
myObj.set(b, 10);

console.log(myObj.get(a), myObj.get(b));
