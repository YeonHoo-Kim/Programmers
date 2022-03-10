function solution(s) {
  var answer = 0;
  let i = 0,
    j = 0,
    str = "",
    cnt = 0;
  for (i = 1; i <= s.length; i++) {
    str = "";
    len = 0;
    cnt = 1;
    for (j = 0; j < parseInt(s.length / i); j++) {
      if (
        s.substring(j * i, (j + 1) * i) ===
        s.substring((j + 1) * i, (j + 2) * i)
      ) {
        cnt += 1;
      } else {
        if (cnt > 1) str = str.concat(cnt, s.substring(j * i, (j + 1) * i));
        else str = str.concat(s.substring(j * i, (j + 1) * i));
        cnt = 1;
      }
    }
    if (s.length % i > 0)
      str = str.concat(s.substring(s.length - (s.length % i)));
    if (answer === 0 || answer > str.length) answer = str.length;
  }
  return answer;
}
