function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let bin = "",
    cnt = 0,
    ans = 0,
    flag = 0;
  while (N > 0) {
    if (N % 2 === 1) {
      if (ans < cnt) ans = cnt;
      flag = 1;
      cnt = 0;
    } else if (N % 2 === 0 && flag === 1) cnt++;
    N = parseInt(N / 2);
  }
  return ans;
}
