const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const count = Number(input[0]) + 1; 
    for(i=1; i<count; i++) {
        console.log("*".repeat(i));
    }
});