def solution(board): #DP
    for i in range(1,len(board)):
        for j in range(1,len(board[0])):
            if board[i][j]==1: board[i][j]=min(board[i-1][j-1],board[i-1][j],board[i][j-1])+1
        # 현재 위치에서 왼,왼-위,위에서 가장 작은 값+1(값 저장하면서 계속 업데이트)
        # 물웅덩이 피해서 길 찾기 문제처럼 하나라도 0이 있으면 0으로 저장
    return max(index for line in board for index in line)**2