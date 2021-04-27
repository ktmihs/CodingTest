def solution(name):
    change=[min( ord(i)-ord('A'),ord('Z')-ord(i)+1 ) for i in name]
    idx,answer=0,0
    while True:
        answer+=change[idx] # 조이스틱 상하 이동 횟수 더해줌
        change[idx]=0       # 더한 곳은 0으로 변경
        if sum(change)==0: return answer    # 모두 변경됐다면 총합 return 
        L,R=1,1
        # 왼쪽 또는 오른쪽이 0인 방향으로 이동
        while change[idx-L]==0: L+=1
        while change[idx+R]==0: R+=1
        # 이동이 더 적은 방향으로 이동
        if L<R: answer+=L;idx-=L    
        else: answer+=R; idx+=R 
    return answer