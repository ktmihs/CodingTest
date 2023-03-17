function solution(num_list, n) {
  return num_list.reduce((newList, item, idx) => {
    if (idx % n) newList[newList.length - 1].push(item);
    else newList.push([item]);
    return newList;
  }, []);
}