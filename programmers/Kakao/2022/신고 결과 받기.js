function solution(id_list, report, k) {
    const answer = [];
    const hash = new Map();
    const hash2 = new Map();
    
    [...new Set(report)].forEach(line=>{
        const [reporter, reportee] = line.split(' ');
        hash.set(reporter, (hash.get(reporter) ? [...hash.get(reporter),reportee] : [reportee]));
        hash2.set(reportee, (hash2.get(reportee) ? [...hash2.get(reportee),reporter] : [reporter]));
    })

    id_list.forEach(id=>{
        let cnt = 0;
        hash.get(id) && hash.get(id).forEach(reporter=>{
            cnt=hash2.get(reporter) && hash2.get(reporter).length>=k?cnt+1:cnt;
        })
        answer.push(cnt);
    })
    return answer;
}