def solution(game_board, table):
    answer,n,bs= 0,len(table),[]
    def func(board,pre,after):  # 게임보드와 블럭에서 들어갈 수 있는 칸과 블럭 추출
        blocks,block,dx,dy=[],[],[-1,0,1,0],[0,1,0,-1] 
        def DFS(x,y,board,p,a): # 블럭 하나 추출
            board[x][y]=a
            block.append([x,y])
            for i in range(4):
                nx,ny=x+dx[i],y+dy[i]
                if nx>=0 and nx<n and ny>=0 and ny<n and board[nx][ny]==p: DFS(nx,ny,board,p,a) # DFS 종료
        for i in range(n):
            for j in range(n):
                if board[i][j]==pre:
                    table[i][j]=after
                    DFS(i,j,board,pre,after)
                    blocks.append(block)
                    block=[]
        return blocks # func 종료
    def func_mtrx(board):
        tmp_list,mtrx=[],[]
        for tb in board:
            min_x,min_y,max_x,max_y=50,50,0,0
            for i in range(len(tb)):
                min_x,min_y=min(tb[i][0],min_x),min(tb[i][1],min_y)
                max_x,max_y=max(tb[i][0],max_x),max(tb[i][1],max_y)
            row=[[0]*(max_y-min_y+1) for _ in range(max_x-min_x+1)]
            tmp_list=list(map(lambda x:(x[0]-min_x,x[1]-min_y),tb))
            for x in tmp_list: row[x[0]][x[1]]=1
            mtrx.append(row)
        return mtrx # func_mtrx 끝
    
    tb_block=sorted(func(table,1,0),key=lambda x:-len(x))
    game_block=sorted(func(game_board,0,1),key=lambda x:-len(x))
    board1=func_mtrx(game_block)
    board2=func_mtrx(tb_block)

    while board1:
        brk=False
        bd1=board1.pop(0)
        bd1=list(zip(*bd1[::-1]))
        one=[i for bd in bd1 for i in bd].count(1)
        for i in range(len(board2)):
            for _ in range(4):
                if bd1==board2[i]:answer+=one;brk=True;del board2[i];break
                else:
                    board2[i]=list(zip(*board2[i][::-1]))
                    if bd1==board2[i]:answer+=one;brk=True;del board2[i];break
            if brk==True: break    
    return answer