function getDist(num1, num2) {
  const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  return (
    Math.abs(keys[num1][0] - keys[num2][0]) +
    Math.abs(keys[num1][1] - keys[num2][1])
  );
}

function solution(numbers, hand) {
  let answer = "";
  let left = "*",
    right = "#";
  for (const num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      left = `${num}`;
      answer = `${answer}L`;
    }
    if (num === 3 || num === 6 || num === 9) {
      right = `${num}`;
      answer = `${answer}R`;
    }
    if (num === 2 || num === 5 || num === 8 || num === 0) {
      if (getDist(left, `${num}`) === getDist(right, `${num}`)) {
        if (hand === "left") {
          left = `${num}`;
          answer = `${answer}L`;
        } else {
          right = `${num}`;
          answer = `${answer}R`;
        }
      } else if (getDist(left, `${num}`) < getDist(right, `${num}`)) {
        left = `${num}`;
        answer = `${answer}L`;
      } else {
        right = `${num}`;
        answer = `${answer}R`;
      }
    }
  }
  return answer;
}
