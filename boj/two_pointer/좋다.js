const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// arr -> 정렬된 배열
// hash -> 각 숫자의 개수
const arr = input[1].split(' ').sort((a, b) => a - b).map(Number);
const hash = new Map();
arr.forEach(a => hash.set(a, (hash.get(a) || 0) + 1));

// answer -> '좋다'인 숫자
const answer = new Set();

arr.forEach((a, i) => {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    // 현재 숫자가 본인을 가리킬 때, 넘어가기
    if (left === i) left++;
    else if (right === i) right--;

    // '좋다'인지 판별. 가운데로 줄여나가기
    else if (arr[left] + arr[right] === a) {
      answer.add(a);
      break;
    } else if (arr[left] + arr[right] > a) right--;
    else left++;
  }
});

// '좋다'의 개수 세기
let count = 0;
[...answer].forEach(a => {
  count += hash.get(a);
})

console.log(count);