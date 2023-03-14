const isSame = list => {
  const len = list.length;

  const front = list.slice(0, Math.floor(len / 2));
  const back = list.slice(Math.ceil(len / 2)).reverse();

  return front.join('') === back.join('');
}

function solution(queries) {

  return queries.map(query => {
    const len = query.length;
    let answer = 10e9;

    const BFS = (L, cnt) => {
      for (let i = L; i < len; i++) {
        if (!query[i]) continue;
        query[i]--;
        if (isSame(query)) {
          console.log(query);
          answer = Math.min(answer, cnt);
        }

        BFS(L + 1, cnt + 1);
        query[i]++;
      }
    }

    BFS(0, 1);
    return answer % 2;
  })
}