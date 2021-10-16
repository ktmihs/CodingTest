class minHeap{
    constructor(){
        this.heap=[]
        this.heap.push(-1e9) // root가 더 이상 올라가지 않도록 0번 index에는 최솟값을 지정
    }
    insert(val){
        this.heap.push(val)
        this.upheap(this.heap.length-1)  // heap의 마지막 노드
    }
    get(){
        if(this.heap.length===2) return this.heap.pop()
        if(this.heap.length===1) return false

        let res=this.heap[1]    // 가장 작은 값 === root

        this.heap[1]=this.heap.pop()    // 마지막 노드를 뽑아 1번에 넣어줌
        this.downheap(1, this.heap.length-1)    // 마지막 `부모`까지만 내려가야 함
        // 마지막 노드의 부모가 마지막 부모임
        return res
    }
    size(){
        return this.heap.length-1
    }

    upheap(pos){
        let tmp=this.heap[pos]  // 마지막 노드의 값 임시저장
        while(tmp<this.heap[parseInt(pos/2)]){  // 현재 노드가 부모보다 작은 숫자일 경우
            this.heap[pos]=this.heap[parseInt(pos/2)]   // 부모 값을 아래로 내림
            pos=parseInt(pos/2) // 위치 이동 - 부모 위치로 이동
            // pos === 최종적으로 tmp의 값이 들어갈 위치
        }
        this.heap[pos]=tmp  // 더 이상 올라갈 수 없을 때, 현재 위치에 값을 넣어줌
    }
    downheap(pos, len){
        let tmp=this.heap[pos], child
        while(pos<=parseInt(len/2)){    // 마지막 부모까지만 내려가기
            child=pos*2
            if(child<len && this.heap[child]>this.heap[child+1]) child++ // 자식 중 작은 값으로 변경
            if(tmp<=this.heap[child]) break
            // --- 자식 중 작은 값을 찾음, 자식보다 작거나 같다면 while 종료 ---
            this.heap[pos]=this.heap[child]
            pos=child
        }
        this.heap[pos]=tmp
    }
}

function solution(scoville, k){
    let count=0, fir, sec
    let scov=new minHeap()
    for(let i=0;i<scoville.length;i++) scov.insert(scoville[i])
    while(scov.size()>1){
        fir=scov.get()
        if(fir>=k) return count
        sec=scov.get()
        scov.insert(fir+sec*2)
        count++

    }
    return count
}
console.log(solution([1, 2, 3, 9, 10, 12], 7))  // 2
console.log(solution([2, 45, 6, 9, 2, 3, 4, 1, 7, 8, 9], 20))   // 7