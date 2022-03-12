function solution(record) {
  var answer = [];
  const record_obj = record.reduce((r_obj, cur) => {
    if (cur.split(" ")[0] !== "Leave") {
      const [check, userId, nickName] = cur.split(" ");
      r_obj[userId] = nickName;
    }
    return r_obj;
  }, {});

  for (const line of record) {
    const [check, userId] = line.split(" ");
    if (check === "Enter")
      answer.push(`${record_obj[userId]}님이 들어왔습니다.`);
    else if (check === "Leave")
      answer.push(`${record_obj[userId]}님이 나갔습니다.`);
  }

  return answer;
}
