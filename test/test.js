/*
interval[i] = [starti, endi] 인 간격의 배열이 주어지면
겹치는 모든 간격을 병합하고 입력의 모든 간격을 포함하는 겹치지 않는 간격의 배열을 반환합니다.

input : [[1,3],[2,6],[8,10],[15,18]]
output: [[1,6],[8,10],[15,18]]

input : [[1,4],[4,5]]
output: [[1,5]]
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  // 오름차순 정렬
  const LEN = intervals.length;
  const answer = [];
  intervals.sort((prev, next) => prev[0] - next[0]);

  // let start, end

  // 초기값 할당
  let [prevStart, prevEnd] = intervals[0];

  // start에 있다면, end 비교(현재 값보다 작거나 같으면 end에 할당, 크다면 현재 [start, end]를 answer 배열에 추가, start=현재 비교값, end 초기화)
  // i-1의 두 번째와 i의 첫 번째가 겹치는 지 확인

  for (let i = 1; i < LEN; i++) {
    const [currStart, currEnd] = intervals[i];
    if (prevEnd >= currStart) prevEnd = currEnd;
    else {
      answer.push([prevStart, prevEnd]);
      prevStart = currStart;
      prevEnd = currEnd;
    }
  }
  answer.push([prevStart, prevEnd]);

  return answer;
};

// output: [[1,4]]

// output: [[0,4]]

console.log(merge([[2, 6], [8, 10], [1, 3], [11, 18]]));
console.log(merge([[1, 4], [4, 5]]));
console.log(merge([[1, 4], [2, 3]]));
console.log(merge([[1, 4], [0, 4]]));