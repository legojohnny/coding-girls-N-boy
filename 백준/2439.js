// https://www.acmicpc.net/problem/2439, 별 찍기 - 2
// node 2439
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (a) {
    let star='';
    let empty='';
   
   for(let i=1; i <= a; i++){
    star += '*';
    for(let j = 0;  j < a - i; j++){
        empty += ' ';
      }
      console.log(empty + star);
      empty = '';
   };

  rl.close();
}).on('close', function () {
  process.exit();
});
