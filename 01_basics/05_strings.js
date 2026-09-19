const name = "arhiya"
const repoCount = 5

//console.log(name + repoCount + "Value");;

console.log(`hello my name is ${name}  and my repo count is ${repoCount}`);

const gameName = new String("arshiya-anjum-syed")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString);

console.log("---------slice-----------");

const anjum = "arshiyaanjum"
const anotherString = anjum.slice(0, 4);
console.log(anotherString);

const newStringOne = "    arshiya     "
console.log(newStringOne);
console.log(newStringOne.trim());    //removes extra spaces 

const url = "https://arshiya.com/arshiya%20syed"
console.log(url.replace('%20', '-'));


console.log(url.includes("arsh"));
console.log(url.includes("usey"));

console.log(gameName.split('-'));   ///split based on -


//anchor() --it produces an html element with the javascript code
console.log("Hello".anchor("top"));
//at to retrieve letter by index
console.log("Arshiya".at(0));
console.log("Arshiya".at(4));
console.log("Arshiya".at(-1));
//big 
console.log("Syed".big());
//blink
console.log("syed".blink());

//bold
console.log("syed".bold());

//charAt
console.log("Anju".charAt(0));

//charCodeAt
console.log("A".charCodeAt(0));

//codePointAt
console.log("Arshiya".codePointAt(4));

//concat
console.log("Arshiya".concat("Syed"));

//constructor
console.log("Arshiya".constructor);
console.log([1, 2, 3].constructor.name);
console.log((10).constructor.name);
console.log((true).constructor.name);

//endswith
console.log("Arshiya".endsWith("a"));

//fixed
console.log("Hello".fixed());

//fontcolor
console.log("Hello".fontcolor("red"));

//fontsize
console.log("Hello".fontsize(14));

//includes
console.log("Hello World".includes("World"));

//indexOf
console.log("Hello".indexOf("e"));

//isWellFormed
console.log("-".isWellFormed());

//italics
console.log("Hello".italics());

//lastIndexOf
console.log("hello hello".lastIndexOf("hello"));

//length
console.log("Arshiya".length);

//link
console.log("Google".link("https://google.com"));

//localeCompare
console.log("apple".localeCompare("banana"));

//match
console.log("Hello World".match("World"));

//matchAll
console.log([... "cat cat dog".matchAll(/cat/g)]);

//normalize
console.log("é".normalize());

//padEnd
console.log("Hi".padEnd(5, "*"));

//padStart
console.log("Hi".padStart(5, "*"));

//repeat
console.log("Hi ".repeat(3));

//replace
console.log("Hello World".replace("World", "Arshiya"));

//replaceAll
console.log("cat cat cat".replaceAll("cat", "dog"));

//search
console.log("Hello World".search("World"));

//slice
console.log("JavaScript".slice(0, 4));

//small
console.log("Hello".small());

//split
console.log("Apple,Banana,Mango".split(","));

//startsWith
console.log("JavaScript".startsWith("Java"));

//strike
console.log("Hello".strike());

//sub
console.log("H2O".sub());

//substr
console.log("JavaScript".substr(4, 6));

//substring
console.log("JavaScript".substring(0, 4));

//sup
console.log("2".sup());

//toLocaleLowerCase
console.log("HELLO".toLocaleLowerCase());

//toLocaleUpperCase
console.log("hello".toLocaleUpperCase());

//toString
console.log((123).toString());

//toUppercase
console.log("hello".toUpperCase());

//toWellFormed
console.log("Hello".toWellFormed());

//trim
console.log("   Hello   ".trim());

//trimEnd
console.log("Hello   ".trimEnd());

//trimLeft
console.log("   Hello".trimLeft());

//trimRight
console.log("Hello   ".trimRight());

//trimStart
console.log("   Hello".trimStart());

//valueOf
console.log("Hello".valueOf());

//Symbol.iterator
console.log([... "Hello"]);