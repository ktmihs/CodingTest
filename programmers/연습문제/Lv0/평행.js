const gradient = ([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1);
const compare = (a, b, c, d) => +(gradient(a, b) === gradient(c, d));

function solution(dots) {
  const [dot1, dot2, dot3, dot4] = dots;
  return compare(dot1, dot2, dot3, dot4) || compare(dot1, dot3, dot2, dot4) || compare(dot1, dot4, dot2, dot3);
}