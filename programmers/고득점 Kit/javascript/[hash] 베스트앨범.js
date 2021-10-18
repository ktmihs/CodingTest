function solution(genres, plays) {
    let answer = [], arr=[]
    let hash=new Map()
    for(let i=0;i<genres.length;i++){
        if(!hash.get(genres[i])) hash.set(genres[i], [plays[i]])
        else hash.get(genres[i])[0]+=plays[i]
        hash.get(genres[i]).push([plays[i],i])
    }
	// 장르 별로 hash map에 저장
	// 0 index는 재생 수의 총합
    for(let a of hash.values()) arr.push(a)
	// 해시의 값만 배열로 변경 (각 index에 [재생수, [노래 재생 횟수, 노래번호], [노래 재생 횟수, 노래번호], ... ])
    arr.sort((a,b)=>b[0]-a[0])
	// 배열을 재생 수의 총합 순서대로 내림차순 정렬
    for(let a of arr){
        a.sort((x,y)=>y[0]-x[0])	// 노래 재생 횟수를 내림차순으로 정렬
        if(a.length===2) answer.push(a[1][1])	// 해당 장르에 노래가 하나밖에 없을 때, 하나만 추가
        else answer.push(a[1][1],a[2][1])	// 최대 2개 추가
    }
    return answer
}