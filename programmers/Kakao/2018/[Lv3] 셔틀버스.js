function solution(n, t, m, timetable) {
  let answer = '', idx = 0;
  const timeArr = timetable.map(time => +time.split(':')[0] * 60 + +time.split(':')[1]).sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    const busTime = 540 + i * t;
    let timeMax = -1;
    for (let j = 0; j < m; j++) {
      if (idx >= timeArr.length || timeArr[idx] > busTime) {
        timeMax = busTime;
        break;
      } else {
        timeMax = Math.max(timeMax, timeArr[idx] - 1);
        idx++;
      }
    }
    answer = timeMax;
  }
  const hour = (Math.floor(answer / 60) < 10 ? '0' : '') + Math.floor(answer / 60);
  const minute = (answer % 60 < 10 ? '0' : '') + (answer % 60);
  return hour + ':' + minute;
}