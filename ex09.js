const prompt = require("prompt-sync")();
let str = prompt("enter the string :");
let find = prompt("enter the substring you want to find :");
if (str.includes(find))
	console.log("exist");
else
	console.log(" the substring you wan to find doesnt exist");
