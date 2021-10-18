function solution(clothes) {
    var answer = 1, hash=new Map()
    for (let [_,i] of clothes) hash.set(i,(hash.get(i)||0)+1)
	// 옷들을 종류별로 분류하여 hash map에 저장
    for (let [i,v] of hash) answer*=(v+1)
	// 입을 수 있는 모든 가짓수를 계산
    return answer-1
	// 아무 것도 착용하지 않는 경우를 제외한 가짓수를 return
}