const prompt = require("prompt-sync")();
let str = prompt("enter the string :");
let letter = prompt("enter the char you want to count :");
let count = 0;
let i = 0;
while (i < str.length)
{
	if (str[i] === letter)
		count++;
	i++;
}
console.log(count);
