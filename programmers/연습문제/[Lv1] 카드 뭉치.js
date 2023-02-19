function solution(cards1, cards2, goal) {
  for (const goalWord of goal) {
    if (cards1[0] === goalWord) cards1.shift();
    else if (cards2[0] === goalWord) cards2.shift();
    else return 'No';
  }
  return 'Yes';
}