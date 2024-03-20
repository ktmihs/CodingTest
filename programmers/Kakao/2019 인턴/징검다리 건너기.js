function solution(stones, k) {
  const binarySearch = (min, max) => {
    if (min >= max - 1) return max;
    const middle = Math.floor((min + max) / 2);
    let count = 0;
    for (const stone of stones) {
      if (count === k) break;
      if (stone <= middle) count++;
      else count = 0;
    }
    if (count === k) return binarySearch(min, middle);
    else return binarySearch(middle, max);
  };
  return binarySearch(0, 2 * 10e9);
}