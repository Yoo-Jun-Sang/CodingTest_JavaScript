const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => (el));
}).on('close', function(){
    const A = input[0];
    console.log(A + "??!");
    process.exit();
});