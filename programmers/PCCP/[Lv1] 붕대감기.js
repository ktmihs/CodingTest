function solution(bandage, health, attacks) {
  const [healTime, heal, bonus] = bandage;
  let finishTime = attacks[attacks.length - 1][0];
  let curr = {
    health: health, // 현재 체력
    time: 0,        // 현재 시간
    attackIdx: 0,   // 다음 공격 인덱스
    bandageCnt: 0   // 연속횟수
  };

  while (curr.time <= finishTime) {
    const [attackTime, attack] = attacks[curr.attackIdx];
    // 공격 당할 타이밍인지 확인
    if (curr.time === attackTime) {
      curr.health -= attack;

      // 죽음
      if (curr.health <= 0) return -1;
      else {
        curr.attackIdx++;
        curr.bandageCnt = 0;
      }
    }
    // 아직 다음 공격 당하기 전
    else {
      if (curr.health < health) {
        curr.bandageCnt++;
        curr.health += heal;
      }

      // 연속 공격 성공 시
      if (curr.bandageCnt === healTime) {
        curr.health += bonus;
        curr.bandageCnt = 0;
      }
      // 체력은 최대 체력을 넘을 수 없음
      if (curr.health > health) curr.health = health;
    }
    curr.time++;
  }

  return curr.health;
}