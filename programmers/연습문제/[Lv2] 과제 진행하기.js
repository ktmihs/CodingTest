function solution(plans) {
  const answer = [], stack = [];
  let lastTime;
  const timeToNum = str => str.split(':').reduce((sum, t, i) => sum + t * (i ? 1 : 60), 0)

  plans.sort((a, b) => timeToNum(a[1]) - timeToNum(b[1])).forEach(([name, start, playTime]) => {
    const startTime = timeToNum(start);

    while (stack.length) {
      const [lastName, remaining] = stack.pop();
      if (lastTime + remaining > startTime) {
        stack.push([lastName, lastTime + remaining - startTime]);
        break;
      }
      else {
        answer.push(lastName);
        lastTime += remaining;
      }
    }
    lastTime = startTime;
    stack.push([name, +playTime]);
  });

  while (stack.length) answer.push(stack.pop()[0]);
  return answer;
}