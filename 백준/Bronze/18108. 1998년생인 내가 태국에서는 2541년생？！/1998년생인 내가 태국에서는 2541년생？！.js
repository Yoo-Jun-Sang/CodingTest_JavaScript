const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){ //이 안에 솔루션 코드 작성
    const A = parseInt(input[0]);
    console.log(A - 543);
    process.exit();
});