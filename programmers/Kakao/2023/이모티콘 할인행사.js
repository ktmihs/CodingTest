
function solution(users, emoticons) {
  const arr = (L, result, all) => {
    if (L === EMO_LEN) return all.push(result);
    for (const data of DISCOUNT_RATE) arr(L + 1, [...result, data], all);
    return all;
  };
  const EMO_LEN = emoticons.length;
  const DISCOUNT_RATE = [40, 30, 20, 10];
  const ALL_CASE = arr(0, [], []);
  let result = [0, 0];

  for (const CASE of ALL_CASE) {
    let [EMO_PLUS, EMO_SALES] = [0, 0];
    for (const [USER_RATE, USER_PRICE] of users) {
      const TOTAL_PRICE = CASE.reduce((total, rate, i) => {
        if (USER_RATE <= rate) total += emoticons[i] * (100 - rate) / 100;
        return total;
      }, 0);
      if (USER_PRICE <= TOTAL_PRICE) EMO_PLUS++;
      else EMO_SALES += TOTAL_PRICE;
    }
    if (result[0] < EMO_PLUS) result = [EMO_PLUS, EMO_SALES];
    else if (result[0] === EMO_PLUS && result[1] < EMO_SALES) result[1] = EMO_SALES;
  }

  return result;
}