function solution(n, wires) {
  const network = [...new Array(n)].map(() => Array());
  const len = wires.length;
  let answer = n;

  wires.forEach(([i, j]) => {
    network[i - 1].push(j - 1);
    network[j - 1].push(i - 1);
  });

  network.forEach((init, i) => {
    init.forEach(start => {
      const visited = new Array(n).fill(0), queue = [start];
      visited[i] = 1;
      visited[start] = 1;
      let cnt = 0;

      while (queue.length) {
        const curr = queue.shift();
        for (const next of network[curr]) {
          if (!visited[next]) {
            visited[next] = 1;
            queue.push(next);
            cnt++;
          }
        }
      }
      answer = Math.min(answer, len - 1 - Math.min(len - 1 - cnt, cnt) * 2);
    })
  })

  return answer;
}