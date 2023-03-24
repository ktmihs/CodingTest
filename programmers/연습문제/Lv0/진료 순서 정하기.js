function solution(emergency) {
  return emergency.map(pat => emergency.filter(other => other > pat).length + 1);
}