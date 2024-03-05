function solution(friends, gifts) {
  const presentList = friends.reduce((presentList, friend) => {
    presentList[friend] = {};
    return presentList;
  }, {});

  gifts.forEach(gift => {
    const [sender, reciever] = gift.split(' ');
    presentList[sender][reciever] = (presentList[sender][reciever] ?? 0) + 1;
    presentList[sender].total = (presentList[sender].total ?? 0) + 1;
    presentList[reciever].total = (presentList[reciever].total ?? 0) - 1;
  });

  const LEN = friends.length;
  const result = friends.reduce((arr, friend) => {
    arr[friend] = 0;
    return arr;
  }, {});

  for (let prev = 0; prev < LEN; prev++) {
    for (let next = prev + 1; next < LEN; next++) {
      const prevFriend = friends[prev];
      const nextFriend = friends[next];

      if ((presentList[prevFriend][nextFriend] ?? 0) > (presentList[nextFriend][prevFriend] ?? 0)) result[prevFriend]++;
      else if ((presentList[prevFriend][nextFriend] ?? 0) < (presentList[nextFriend][prevFriend] ?? 0)) result[nextFriend]++;
      else {
        if ((presentList[prevFriend].total ?? 0) > (presentList[nextFriend].total ?? 0)) result[prevFriend]++;
        else if ((presentList[prevFriend].total ?? 0) < (presentList[nextFriend].total ?? 0)) result[nextFriend]++;
      }
    }
  }

  return Object.values(result).sort((a, b) => b - a)[0];
}