def solution(tri):
    for i in range(1,len(tri)):
        for j in range(i+1):
            if j==0: tri[i][j]+=tri[i-1][j] #첫번째
            elif j==i: tri[i][j]+=tri[i-1][j-1] #마지막
            else: tri[i][j]+=max(tri[i-1][j-1:j+1]) #그 외는 양 상단 중 큰 수 더함
    return max(tri[-1]) #더해진 숫자들 중 가장 큰 수