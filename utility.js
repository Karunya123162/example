const util = require('util');
const fs = require('fs');
const {isDate, isRegExp}=util.types;
//format string to printf in c
const str = util.format('Hello %s,your age is %d','john',25);
console.log(str);
//debugging utility
const obj = {name:"Daniel",age:28};
console.log(util.inspect(obj,{showHidden:true,depth:null}));

//converts the callback based function into a promise based one
const readFileSync = util.promisify(fs.readFile);
readFileSync('input.txt','utf-8')
.then(data=>console.log(data))
.then(err=>console.error(err))
//safely check types, especially for internal types
console.log(isDate(new Date()));
console.log(isRegExp("abc"));