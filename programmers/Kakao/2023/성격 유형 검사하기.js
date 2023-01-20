function solution(survey, choices) {
  let answer = '';

  const mbti = new Map();
  mbti.set('R', 0).set('T', 0).set('C', 0).set('F', 0).set('J', 0).set('M', 0).set('A', 0).set('N', 0);

  survey.forEach((kind, idx) => {
    const [disAgree, agree] = kind.split('');

    const score = choices[idx];
    if (score > 4) mbti.set(agree, mbti.get(agree) + (score - 4));
    else if (score < 4) mbti.set(disAgree, mbti.get(disAgree) + (4 - score));
  })

  answer += mbti.get('R') >= mbti.get('T') ? 'R' : 'T';
  answer += mbti.get('C') >= mbti.get('F') ? 'C' : 'F';
  answer += mbti.get('J') >= mbti.get('M') ? 'J' : 'M';
  answer += mbti.get('A') >= mbti.get('N') ? 'A' : 'N';
  return answer;
}