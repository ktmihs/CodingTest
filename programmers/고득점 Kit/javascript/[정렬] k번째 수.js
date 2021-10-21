function solution(array, commands) {
    let answer = []
    for(let command of commands){
        let tmp=array.slice(command[0]-1,command[1])
	// 배열 자르기
        tmp.sort((a,b)=>a-b)
	// 정렬
        answer.push(tmp[command[2]-1])
	// 값 추가
    }
    return answer
}