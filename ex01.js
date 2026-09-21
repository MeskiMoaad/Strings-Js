const prompt = require('prompt-sync')();
let text = prompt("enter a string :");
let counter = 0;
for (let characters of text)
{
	counter++;
}
console.log(`the length of "${text}" is ${counter} characters`);
