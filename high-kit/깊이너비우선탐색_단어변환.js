function cmp(str1, str2) {
  let cnt = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) cnt++;
  }
  if (cnt > 1) return false;
  else return true;
}

function DFS(cur, words, vis, cnt, answer) {
  vis[cur] = true;
  for (let i in words) {
    if (cur !== i && !vis[i] && cmp(words[cur], words[i])) {
      if (i === "0") {
        if (answer[0] > cnt + 1) answer[0] = cnt + 1;
        return;
      }
      DFS(i, words, vis, cnt + 1, answer);
    }
  }
}

function solution(begin, target, words) {
  let answer = new Array(1).fill(51);
  let vis = new Array(words.length + 1).fill(false);
  let newWords = [begin, ...words];
  let startIdx = newWords.findIndex((word) => word === target);

  if (startIdx === -1) return 0;
  DFS(startIdx, newWords, vis, 0, answer);

  return answer[0];
}
