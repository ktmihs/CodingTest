function solution(participant, completion) {
    const marathon = new Map()
    for (let comp of completion) marathon.set(comp, (marathon.get(comp) || 0) + 1)
    /* marathon에 '완주한 선수 이름': '인원 수'를 넣어줌 */
    for (let part of participant){
        if (!marathon.has(part) || marathon.get(part) === 0) return part
        /* marathon에 없거나, 값이 0일 경우(동명인 사람 모두 통과) 해당 참가자 return */
        else marathon.set(part, marathon.get(part)-1)
        /* 동명이인이 있을 수 있기 때문에 value인 인원 수를 1씩 감소시킴 */
    }
}