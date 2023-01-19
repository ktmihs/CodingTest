const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const transTime = time => time < 10 ? '0' + time : time;

const solution = () => {
  const [roomCnt, _] = input.shift().split(' ').map(Number);
  const roomHash = new Map();
  input.splice(0, roomCnt).forEach(room => roomHash.set(room, new Array(9).fill(false)));

  input.map(list => {
    const [room, start, end] = list.split(' ');

    for (let time = 0; time < end - start; time++) roomHash.get(room)[start - 9 + time] = true;
  });

  const answer = [...roomHash].sort((prev, next) => prev[0] > next[0] ? 1 : -1).map(room => {
    const [roomName, timeTable] = room;
    const tmp = [];
    tmp.push(`Room ${roomName}:`);
    const availableList = [];
    let start = 0, end = 0;

    timeTable.forEach((time, idx) => {
      if (time && start) {
        availableList.push(`${transTime(start)}-${transTime(end)}`);
        start = 0;
        end = 0;
      }
      else if (!time) {
        if (!start) start = idx + 9;
        end = idx + 10;
      }
    })
    if (start) availableList.push(`${transTime(start)}-${transTime(end)}`);

    if (!availableList.length) tmp.push('Not available');
    else {
      tmp.push(`${availableList.length} available:`);
      tmp.push(...availableList);
    }

    return tmp.join('\n');
  }).join('\n-----\n');

  console.log(answer);
};

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  solution();
});