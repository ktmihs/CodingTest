function solution(a) {
  const list = a.reduce((list, item) => {
    list[item] ? list[item][1]++ : list[item] = [item, 1];
    return list;
  }, []).filter(item => item[1]).sort((prev, next) => next[1] - prev[1])

  let answer = 0;
  for (let i = 0; i < list.length; i++) {
    if (answer >= list[i][1]) continue;

    let count = 0;

    for (let j = 0; j < a.length; j++) {
      if (j + 1 === a.length || a[j] === a[j + 1]) continue;
      if (a[j] !== list[i][0] && a[j + 1] !== list[i][0]) continue;

      count++;
      j++;
    }
    answer = Math.max(answer, count);
  }
  return answer * 2;
}