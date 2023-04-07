function solution(players, callings) {
  const names = {};
  players.forEach((player, i) => names[player] = i);

  callings.forEach(calling => {
    const idx = names[calling];
    const prev = players[idx - 1];
    [names[calling], names[prev]] = [idx - 1, idx];
    [players[idx], players[idx - 1]] = [prev, calling];
  });
  return players;
}