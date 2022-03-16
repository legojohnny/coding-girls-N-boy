// https://www.acmicpc.net/problem/2442, 별 찍기 -5
// node 2442

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (a) {
    let star='';
    let empty='';
   
   for(let i=1; i <= a; i++){
    star = '*';
    result = star.repeat((i*2)-1);
    for(let j = 0;  j < a - i; j++){
        empty += ' ';
      }

      console.log(empty + result);
      empty = '';
   };

  rl.close();
}).on('close', function () {
  process.exit();
});
