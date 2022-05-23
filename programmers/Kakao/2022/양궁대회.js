function solution(n, info) {
  let answer = new Array(11).fill(0), gap = 0;

  const isLower = list => {
    for (let i = 10; i >= 0; i--) {
      if (answer[i] < list[i]) return true;
      else if (answer[i] === list[i]) continue;
      else return false;
    }
  }

  const maxScore = list => {
    let apeach = 0, ryan = 0;
    for (let i = 0; i <= 10; i++) info[i] < list[i] ? ryan += 10 - i : info[i] ? apeach += 10 - i : null;
    const newGap = ryan - apeach;
    if (newGap > gap || (newGap && newGap === gap && isLower(list))) {
      answer = list.slice();
      gap = newGap;
    }
  }

  const result = info.map(score => score + 1);
  const DFS = (L, i, list) => {
    if (L >= n) {
      L === n && maxScore(list);
      return;
    }
    if (i === 11) return;
    if (i === 10 && n - L > 0) {
      list[i] = n - L;
      DFS(n, i + 1, list);
      list[i] = 0;
    }
    else {
      list[i] = result[i];
      DFS(L + result[i], i + 1, list);
      list[i] = 0;
      DFS(L, i + 1, list);
    }
  }

  DFS(0, 0, new Array(11).fill(0));

  return answer.reduce((sum, i) => sum + i, 0) ? answer : [-1];
}