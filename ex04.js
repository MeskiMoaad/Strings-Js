const prompt = require('prompt-sync')();
let str = prompt("enter a string to reverse :");
let i = str.length - 1;

while (i >= 0){
	process.stdout.write(str[i]);
	i--;
}
