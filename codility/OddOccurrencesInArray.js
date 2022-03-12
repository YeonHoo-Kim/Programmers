function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const totalCounter = A.reduce((counter, num) => {
    counter[num] = counter[num] ? counter[num] + 1 : 1;
    return counter;
  }, {});
  for (key in totalCounter) {
    if (totalCounter[key] % 2 === 1) {
      return Number(key);
    }
  }
}
