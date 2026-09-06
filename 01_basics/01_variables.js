const accountId = 14453
let accountEmail =  "123@gmail.com"
var accountpassword = "12345"
accountCity = "Ajmer"
let accountState;

// accountId = 2; not allowed

accountEmail="hc@hc.com"
accountpassword ="2121212121"
accountpassword = "Bengaluru"
console.log(accountId);

/*
Prefer not to use var because of issue in block
cope and functional scope 
*/

console.table([accountId, accountEmail, accountpassword, accountCity, accountState])

