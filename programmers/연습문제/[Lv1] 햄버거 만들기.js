function solution(ingredient) {
  const stack = [];
  return ingredient.reduce((hamburger, topping) => {
    if (topping === 1 && stack.slice(-3).join('') === '123') {
      for (i = 0; i < 3; i++) stack.pop();
      hamburger++;
    } else stack.push(topping);
    return hamburger;
  }, 0);
}

// function solution(ingredient) {
//   const stack = [];
//   return ingredient.reduce((hamburger, topping, curr) => {
//     if (stack.length) {
//       const prev = stack.pop();
//       if (ingredient[prev] === 3) topping === 1 && hamburger++;
//       else if (ingredient[prev] + 1 === topping) stack.push(curr);
//       else if (topping === 1) stack.push(prev, curr);
//     }
//     else topping === 1 && stack.push(curr);
//     return hamburger;
//   }, 0);
// }
// 왜 안 될까?