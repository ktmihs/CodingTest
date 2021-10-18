class minHeap {
    constructor() {
        this.heap = [];
        this.heap.push(-1e9);
    }
    insert(val) {
        this.heap.push(val);
        this.upheap(this.heap.length - 1);
    }
    get() {
        if (this.heap.length === 2) return this.heap.pop();
        if (this.heap.length === 1) return false;

        let res = this.heap[1];

        this.heap[1] = this.heap.pop();
        this.downheap(1, this.heap.length - 1);
        return res;
    }
    size() {
        return this.heap.length - 1;
    }

    upheap(pos) {
        let tmp = this.heap[pos];
        while (tmp[0] < this.heap[parseInt(pos / 2)][0]) {
            this.heap[pos] = this.heap[parseInt(pos / 2)];
            pos = parseInt(pos / 2);
        }
        this.heap[pos] = tmp;
    }
    downheap(pos, len) {
        let tmp = this.heap[pos],
            child;
        while (pos <= parseInt(len / 2)) {
            child = pos * 2;
            if (child < len && this.heap[child][0] > this.heap[child + 1][0])
                child++;
            if (tmp[0] <= this.heap[child][0]) break;
            this.heap[pos] = this.heap[child];
            pos = child;
        }
        this.heap[pos] = tmp;
    }
}

function solution(jobs) {
    let answer = 0,
        endTime = 0,
        work,
        a,
        b;
    let len = jobs.length;
    jobs.sort((a, b) => b[0] - a[0]);
    let heap = new minHeap();
    for (let i = 0; ; i++) {
        if (!jobs.length && !heap.size()) break;
        while (jobs.length && jobs[jobs.length - 1][0] === i) {
            [a, b] = jobs.pop();
            heap.insert([b, a]);
        }
        if (heap.size() && endTime <= i) {
            work = heap.get();
            endTime = i + work[0];
            answer += endTime - work[1];
        }
    }
    return parseInt(answer / len);
}
