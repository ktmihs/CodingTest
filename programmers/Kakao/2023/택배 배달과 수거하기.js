function solution(cap, n, deliveries, pickups) {
  let result = 0;

  while (deliveries.length || pickups.length) {
    while (deliveries.length && !deliveries[deliveries.length - 1]) deliveries.pop();
    while (pickups.length && !pickups[pickups.length - 1]) pickups.pop();
    const len = Math.max(deliveries.length, pickups.length);
    let boxes = cap;

    while (boxes) {
      const delivery = deliveries.pop();

      if (boxes <= delivery) {
        deliveries.push(delivery - boxes);
      }
      boxes -= Math.min(delivery, boxes);
    }
    boxes = cap;

    while (boxes) {
      const pickup = pickups.pop();
      if (boxes <= pickup) {
        pickups.push(pickup - boxes);
      }
      boxes -= Math.min(pickup, boxes);
    }
    result += len;
  }
  return result * 2;
}