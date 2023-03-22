function solution(babbling) {
  return babbling.filter(b => {
    while (b.length) {
      if (['aya', 'woo'].includes(b.slice(0, 3))) b = b.slice(3);
      else if (['ye', 'ma'].includes(b.slice(0, 2))) b = b.slice(2);
      else return false;
    }
    return true;
  }).length;
}

function solution(babbling) {
  const reg = /^(aya|ye|woo|ma)+$/
  return babbling.filter(word => reg.test(word)).length;
}