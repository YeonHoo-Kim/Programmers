function solution(new_id) {
  let i = 0;
  let idArr = [];
  // 1단계
  new_id = new_id.toLowerCase();
  // 2단계
  for (i = 0; i < new_id.length; i++) {
    if (
      (new_id[i] >= "a" && new_id[i] <= "z") ||
      (new_id[i] >= "0" && new_id[i] <= "9") ||
      new_id[i] === "-" ||
      new_id[i] === "_" ||
      new_id[i] === "."
    )
      idArr.push(new_id[i]);
  }
  // 3단계
  idArr = idArr.filter(
    (letter, i) => i === 0 || !(letter === "." && idArr[i - 1] === ".")
  );
  // 4단계
  idArr = idArr.filter(
    (letter, i) => !((i === 0 || i === idArr.length - 1) && letter === ".")
  );
  // 5단계
  if (idArr.length === 0) idArr.push("a");
  // 6단계
  if (idArr.length >= 16) idArr = idArr.filter((letter, i) => i < 15);
  if (idArr[idArr.length - 1] === ".") idArr.pop();
  // 7단계
  if (idArr.length <= 2) {
    let tmp = idArr[idArr.length - 1];
    while (idArr.length < 3) {
      idArr.push(tmp);
    }
  }
  return idArr.join("");
}
