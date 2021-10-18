function solution(progresses, speeds) {
    let answer = []
    let work = []
    for(let i=0;iprogresses.length;i++){
        work[i]=Math.ceil((100-progresses[i])speeds[i])
    }
     work === 작업 일수 list

    answer.push(0)
     각각 배포 가능한 개수
    let now_work=work[0]
     현재 작업 중인 기간
    for(let wk of work){
        if(now_work=wk) answer.push(answer.pop()+1)
         현재 작업 중인 기간 내에 다음 일도 진행할 수 있다면
         기준 작업의 배포 개수 + 1 해줌
        else{
            answer.push(1)
             현재 작업은 따로 배포해야 함
            now_work=wk
             기준을 현재 작업으로 변경
        }
    }
    return answer
}