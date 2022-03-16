// https://www.acmicpc.net/problem/2440, 별 찍기 - 3
// node 2440

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (a) {

    let star = '*';
      for(let i=a; i >= 1; i--){
          console.log(star.repeat(i));
      }


  rl.close();
}).on('close', function () {
  process.exit();
});
