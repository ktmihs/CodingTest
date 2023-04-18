function solution(book_time) {
  const bookTime = book_time.map(times =>
    times.map(time => {
      const [hh, mm] = time.split(':');
      return hh * 60 + +mm;
    })).sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  const rooms = [];
  rooms.push(bookTime[0][1]);

  for (let k = 1; k < bookTime.length; k++) {
    if (rooms[0] + 10 > bookTime[k][0]) rooms.push(bookTime[k][1]);
    else {
      rooms.shift();
      rooms.push(bookTime[k][1]);
    }
    rooms.sort((a, b) => a - b);
  }
  return rooms.length;
}