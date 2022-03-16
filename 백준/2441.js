// https://www.acmicpc.net/problem/2441, 별 찍기 - 4
// node 2441

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (a) {
    let star='';
    let empty='';
   
   for(let i=0; i <= a-1; i++){
    empty += ' ';
    for(let j = 0;  j < a - i; j++){
        star += '*';
      }
      result = empty + star;
      result2= result.substr(1, a);
      console.log(result2);
      star = '';
   };
    
  rl.close();
}).on('close', function () {
  process.exit();
});
