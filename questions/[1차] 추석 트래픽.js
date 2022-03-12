function solution(lines) {
  let answer = 0,
    cnt = 0;
  const points = [];
  const timeData = lines.reduce((arr, cur) => {
    const [date, time, duration] = cur.split(" ");
    let eTime = new Date(`${date} ${time}`);
    let sTime = new Date(`${date} ${time}`);
    // 반드시 getTime 메서드를 사용해서 milliseconds로 바꿔주고 + - 연산을 해야 제대로 작동함
    // 안 바꾸고 new Date에 연산하면 동작 오류 있음
    eTime = eTime.getTime();
    sTime = sTime.getTime() - parseFloat(duration.replace("s", "")) * 1000 + 1;
    points.push(sTime);
    points.push(eTime);
    arr.push({ sTime, eTime });
    return arr;
  }, []);

  points.sort((a, b) => a - b);

  for (let i = 0; i < points.length; i++) {
    cnt = 0;
    for (let j = 0; j < timeData.length; j++) {
      if (
        points[i] + 999 >= timeData[j].sTime &&
        points[i] <= timeData[j].eTime
      ) {
        cnt++;
      }
    }
    if (answer < cnt) answer = cnt;
  }
  return answer;
}
