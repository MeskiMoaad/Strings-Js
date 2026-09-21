const prompt = require("prompt-sync")();
let str = prompt("enter the string :");
let tab = "";
let i = 0;
let j = 0;
while (i < str.length)
{
	if (str[i] !== " ")
		process.stdout.write(str[i]);
	i++;

}
