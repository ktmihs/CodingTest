const calc = (date, term) => {
  let [yy, mm, dd] = date.split('.').map(Number);
  mm += term;

  if (dd === 1) {
    mm--;
    dd = 28;
  } else dd--;

  if (mm > 12) {
    yy += Math.floor(mm / 12);
    mm = mm % 12;
  }

  return yy * 12 * 28 + mm * 28 + dd;
}

function solution(today, terms, privacies) {
  const answer = [];
  const termList = new Map();

  const [yy, mm, dd] = today.split('.').map(Number);
  const TODAY = yy * 12 * 28 + mm * 28 + dd;

  terms.forEach(term => {
    const [kind, month] = term.split(' ');
    termList.set(kind, +month);
  })

  privacies.forEach((privacy, idx) => {
    const [date, kind] = privacy.split(' ');
    const month = termList.get(kind);

    const term = calc(date, month);

    if (TODAY > term) answer.push(idx + 1);
  })
  return answer;
}