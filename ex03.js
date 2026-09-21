const prompt = require('prompt-sync')();
let str1 = prompt("enter the first string :");
let str2 = prompt("enter the second string :");

if (str1.length === str2.length)
	console.log("the two strings are equal ");
else
	console.log("the two strings are not equal ");
