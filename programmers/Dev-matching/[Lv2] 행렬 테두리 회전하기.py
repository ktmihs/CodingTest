def solution(rows, columns, queries):
    def rotate(x1,y1,x2,y2,board):
        x1,y1,x2,y2=x1-1,y1-1,x2-1,y2-1     # index로 변경
        tmp,val=board[x1][y1],rows*columns  # tmp=맨 처음 옮겨지는 칸 숫자, val=min 값
        for x in range(x1,x2): val=min(val,board[x][y1]);board[x][y1]=board[x+1][y1]    # ⬆
        for y in range(y1,y2): val=min(val,board[x2][y]);board[x2][y]=board[x2][y+1]    # ⬅
        for x in range(x2,x1,-1): val=min(val,board[x][y2]);board[x][y2]=board[x-1][y2] # ⬇
        for y in range(y2,y1,-1): val=min(val,board[x1][y]);board[x1][y]=board[x1][y-1] # ➡
        board[x1][y1+1]=tmp # 맨 처음 값 제대로 옮기기
        return board,val
    board,answer=[[i*columns+j+1 for j in range(columns)]for i in range(rows)],[]
    for query in queries:
        board,val=rotate(*query,board)
        answer.append(val)  # 각 회전 시의 최소값 추가
    return answer