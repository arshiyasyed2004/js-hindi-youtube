//Datatypes are divided into primitive and non-primitive
//Primitive types:
//7 types: String ,Number, Boolean, null, undefined, Symbol(making values unique ), BigInt

const score = false;
const scoreValue = 100.3;
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34567898767899877n


//Non-primitive(Reference type)
//Array, Objects, Functions, 

const heroes = ["arshiya", "awez", "sreeee"]


let myObj = {
    name: "arshiya",
    age: 21,

}

const MyFunction = function () {
    console.log("Hello World");

}

//typeof is used to know the datatype of a variable 

console.log(typeof bigNumber);

let b = null;
console.log(typeof b);

let a;
console.log(typeof a);


let Myspace = function () {
    console.log("Arshiya");
}
console.log(Myspace);


let arm = ({
    key: "arshiya",
    value: 71
}
)
console.log(typeof arm);

console.log(typeof anotherId);

let z = false;
console.log(typeof z);


//stack memory(primitive) --->we will get copy only, heap memory (Non-primitive)  --> we will get reference only 
let myChannelName = "arshiyasyed"

let anotherName = myChannelName
anotherName = "ChaiaurCode"

console.log(myChannelName);

console.log(anotherName);

let user = {
    email: "123@gmail.com",
    upi : "@ybl"
}

let user2 = user;

user2.email = " 12345@gmail.com"

console.log(user.email);
console.log(user2.email);

