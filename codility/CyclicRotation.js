function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let tmp;
  let arr = [...A];
  let rotate_num = K % A.length;
  for (let i = 0; i < rotate_num; i++) {
    tmp = arr.pop();
    arr.unshift(tmp);
  }
  return arr;
}
