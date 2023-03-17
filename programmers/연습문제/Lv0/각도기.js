function solution(angle) {
  return angle > 90 ?
    angle === 180 ? 4 : 3
    :
    angle == 90 ? 2 : 1
}