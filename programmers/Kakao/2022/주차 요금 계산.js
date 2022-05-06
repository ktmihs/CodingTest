function solution(fees, records) {
  const hash = new Map();
  const timeToStr = time => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  }
  for (let record of records) {
    const [time, car, state] = record.split(' ');
    if (state === 'IN') hash.set(car, (hash.get(car) || 0) - timeToStr(time));
    else hash.set(car, hash.get(car) + timeToStr(time));
  }
  for (let [key, value] of hash.entries()) {
    if (value <= 0) value += timeToStr('23:59');
    if (value <= fees[0]) hash.set(key, fees[1]);
    else hash.set(key, fees[1] + Math.ceil((value - fees[0]) / fees[2]) * fees[3]);
  }
  return [...hash].sort().map(val => val[1]);
}