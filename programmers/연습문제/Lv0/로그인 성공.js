function solution(id_pw, db) {
  const [myId, myPw] = id_pw;
  const [sameData] = db.filter(([dbId, _]) => myId === dbId);
  return sameData ? sameData[1] === myPw ? "login" : "wrong pw" : "fail";
}