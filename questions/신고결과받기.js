function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const reportList = {};

  id_list.forEach((id) => {
    reportList[id] = [];
  });

  report.forEach((str) => {
    const [userId, reportId] = str.split(" ");
    if (!reportList[reportId].includes(userId)) {
      reportList[reportId].push(userId);
    }
  });

  for (const key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].forEach((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}
