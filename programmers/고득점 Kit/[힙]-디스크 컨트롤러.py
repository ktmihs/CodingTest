import heapq as hq
def solution(jobs):
    time,total,work=0,0,[]
    hq.heapify(work)
    job_len=len(jobs)
    jobs=[[j,i] for i,j in jobs]
    while len(jobs)+len(work):
        temp=[]
        for i in range(len(jobs)):
            if jobs[i][1]==0 or jobs[i][1] <= time: hq.heappush(work,jobs[i])
            else: temp.append(jobs[i])
        jobs=temp
        if len(work):
            total+=(work[0][0]+(time-work[0][1]))
            time+=work[0][0]
            hq.heappop(work)
        else: time+=1
    return int(total/job_len)