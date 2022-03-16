function DFS(cur, graph, vis) {
  vis[cur] = true;
  for (let i = 0; i < graph[0].length; i++) {
    if (cur !== i && !vis[i] && graph[cur][i]) DFS(i, graph, vis);
  }
}

function solution(n, computers) {
  let answer = 0;
  let vis = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!vis[i]) {
      DFS(i, computers, vis);
      answer += 1;
    }
  }
  return answer;
}
