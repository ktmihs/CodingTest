function solution(age) {
  return [...age + ''].map(num => String.fromCharCode(+num + 97)).join('');
}