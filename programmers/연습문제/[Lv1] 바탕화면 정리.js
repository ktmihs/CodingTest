function solution(wallpaper) {
  const pos = { top: 50, left: 50, right: 0, bottom: 0 };
  wallpaper.forEach((line, i) => {
    const pre = line.indexOf('#');
    const next = line.lastIndexOf('#');

    if (pre === -1) return;
    pos.top = Math.min(pos.top, i);
    pos.left = Math.min(pos.left, pre);
    pos.bottom = Math.max(pos.bottom, i);
    pos.right = Math.max(pos.right, next);
  })
  return [pos.top, pos.left, pos.bottom + 1, pos.right + 1];
}

function solution(wallpaper) {
  const pos = { top: 50, left: 50, right: 0, bottom: 0 };
  wallpaper.forEach((line, i) => {
    line.forEach((file, j) => {
      if (file === '.') return;
      pos.top = Math.min(pos.top, i);
      pos.left = Math.min(pos.left, j);
      pos.bottom = Math.max(pos.bottom, i);
      pos.right = Math.max(pos.right, j);
    })
  })
  return [pos.top, pos.left, pos.bottom + 1, pos.right + 1];
}