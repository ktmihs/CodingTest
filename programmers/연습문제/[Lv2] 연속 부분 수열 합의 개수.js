function solution(elements) {
  const len = elements.length, elementList = [...elements, ...elements];

  return elements.reduce((set, _, i) => {
    elementList.slice(i, i + len).reduce((sum, ele) => {
      set.add(sum + ele);
      return sum + ele;
    }, 0);
    return set;
  }, new Set()).size;
}