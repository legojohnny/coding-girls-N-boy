// https://www.acmicpc.net/problem/2438, 별 찍기 - 1
// node 2438 1시간, 2시간
// 20분 이상 고민해보시고... 답지보시거나, 일요일에 오셔서
// 어떻게 접근하는가?
// 변수로 저장을 해놓는다.
// 2중 for문으로 루프를 돌린다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let star = '';
rl.on('line', function (a) {
    for(let i=0; i <= a-1; i++){
      star += '*';
      console.log(star);
    }
    /**
     * 백준 컴퓨터가 a에다가 변수 넣어줌.
     * 아래에 코드를 작성하세요.
     */

    // 코드 작성, 매개변수 a

    /**
     * 여기까지 작성 영역
     */
  rl.close();
}).on('close', function () {
  process.exit();
});

// 구현능력 길러주는 훈련
