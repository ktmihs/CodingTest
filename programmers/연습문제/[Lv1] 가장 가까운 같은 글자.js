function solution(s) {
  const idxList = new Array(26).fill(-1);

  return [...s].map((char, idx) => {
    const num = char.charCodeAt(0) - 97;

    const tmp = idxList[num];
    idxList[num] = idx;

    return tmp === -1 ? tmp : idxList[num] - tmp;
  });
}