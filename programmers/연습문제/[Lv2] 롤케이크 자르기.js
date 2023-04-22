function solution(topping) {
  const older = new Map(), younger = new Map();
  topping.forEach(piece => older.set(piece, (older.get(piece) || 0) + 1));

  return topping.filter(piece => {
    older.get(piece) === 1 ? older.delete(piece) : older.set(piece, older.get(piece) - 1);
    younger.set(piece, (younger.get(piece) || 0) + 1);
    if (older.size === younger.size) return true;
  }).length;
}