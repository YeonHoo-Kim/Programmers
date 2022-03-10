function getRank(num) {
  return num === 0 ? 6 : 7 - num;
}

function solution(lottos, win_nums) {
  var answer = [];
  let matchCnt = 0;
  let zeroCnt = 0;
  lottos.forEach((num) => {
    if (num === 0) zeroCnt += 1;
    else if (win_nums.indexOf(num) !== -1) matchCnt += 1;
  });
  answer.push(getRank(matchCnt + zeroCnt));
  answer.push(getRank(matchCnt));
  return answer;
}
