function solution(n, edge) {
  const array = [...new Array(n + 1)].map(_ => []);
  edge.forEach(([i, j]) => {
    array[i].push(j);
    array[j].push(i);
  })
  const visited = new Array(n + 1).fill(-1);
  visited[1] = 1;
  const queue = [1];
  let max = 0;

  while (queue.length) {
    const curr = queue.shift();

    for (const next of array[curr]) {
      if (visited[next] === -1) {
        visited[next] = visited[curr] + 1;
        queue.push(next);
        max = Math.max(max, visited[next]);
      }
    }
  }

  return visited.filter(edge => edge === max).length;
}