function solution(name, yearning, photo) {
  const nameObj = {};
  name.forEach((_name, i) => nameObj[_name] = yearning[i]);

  return photo.map(_photo => _photo.reduce((score, person) => score + (nameObj[person] || 0), 0));
}