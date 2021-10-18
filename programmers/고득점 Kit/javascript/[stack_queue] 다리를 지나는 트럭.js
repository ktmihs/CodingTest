function solution(bridge_length, weight, truck_weights) {
    let answer = 0, total = 0
    let bridge=new Array(bridge_length).fill(0)
    // 다리 초기화
    while(truck_weights.length){
        // 마지막 트럭까지 모두 다리 위로 올라갔을 때까지
        // 1초마다 반복
        let out = bridge.shift()
        if(out!==0) total-=out
        // 빠져나온 트럭이 있을 경우, 다리 위의 무게를 해당 트럭만큼 감소
        if(truck_weights[0]+total<=weight){
            // 현재 들어갈 수 있는 트럭이 다리에 올라갈 수 있는 무게인 경우,
            let in_ = truck_weights.shift()
            bridge.push(in_)
            total+=in_
            // 다리에 진입 후, 무게 추가
        }
        else bridge.push(0)
        // 다음 트럭이 나올 때까지 다리에 0 추가
        answer++
        // 1초 증가
    }
    return answer+bridge.length
    // 현재 지난 시간 + 다리 길이만큼(=== 앞으로 남은 시간)
}