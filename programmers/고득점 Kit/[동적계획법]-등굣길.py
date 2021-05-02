def solution(m, n, puddles):
    answer = [[0]*m for _ in range(n)]
    for i in range(n):
        for j in range(m):
            if [j+1,i+1] in puddles: continue
            else:
                if i==0 and j==0: answer[i][j]=1
                else: answer[i][j]=answer[i-1][j]+answer[i][j-1]
    return answer[-1][-1]%1000000007