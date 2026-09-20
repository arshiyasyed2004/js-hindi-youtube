const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(typeof (balance));

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //how many precision values

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));    //decimal before priority

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

//Number MIN_value are the some properties of NUmber

//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++
//Maths libraries by default in javascript

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3)); //do round of numbers then 4 below vaalue
// console.log(Math.ceil(4.6));
// console.log(Math.ceil(4.5));
// console.log(Math.ceil(4.4));
console.log(Math.ceil(4.3));  //ceil above value
console.log(Math.floor(4.9)); //loweat values chooses always
console.log(Math.sqrt(25));  //qrt finding 
console.log(Math.pow(2 ^ 2));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.min(4, 3, 6, 8));

console.log("----------------");

console.log(Math.random()); //gives values between 0 and 1
console.log((Math.random() * 10) + 1); //9.851
console.log(Math.floor(Math.random() * 10) + 1);  // between 1 and 9 valies

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1))+ min );   //19





