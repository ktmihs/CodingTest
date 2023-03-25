function solution(my_string) {
  return [...my_string].reduce((list, char) => {
    isNaN(+char) || list.push(+char);
    return list;
  }, []).sort((a, b) => a - b);
}