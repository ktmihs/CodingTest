function solution(N, stages) {
    const hash = new Map();
    const failure = [...Array(N)].map((list, i) => [i+1, 0]);
    let users = stages.length;
    
    stages.forEach(stage => hash.set(stage, (hash.get(stage) || 0) + 1));
    const stageList = [...hash].sort((a, b) => a[0] - b[0]);
    stageList.forEach(stageItem => {
        const [stage, cnt] = stageItem;
        if(stage > N) return;
        failure[stage - 1][1] = cnt/users;
        users -= cnt;
    })
    failure.sort((a,b) => b[1] - a[1]);
    return failure.map(([stage,failVal]) => stage);
}