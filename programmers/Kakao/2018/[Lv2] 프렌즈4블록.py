def game(board,answer):
    tmp,tmp_board=[],[]
    for i in range(1,len(board)):	# 1회 블록 지우기
        for j in range(1,len(board[0])):
            if board[i][j]==0: break	# 한 줄 계산 종료
            if board[i-1][j-1]==board[i-1][j]==board[i][j-1]==board[i][j]:
                tmp.extend([(i,j),(i-1,j),(i,j-1),(i-1,j-1)])	# 지워지는 블록일 경우, tmp에 index정보 저장
    if len(tmp)==0: return answer	# 변형된 것이 없을 때, 지워진 블록 개수 return
    tmp=sorted(list(set(tmp)))	# 지워진 블록 index 개수 구하기
    answer+=len(tmp)	# 지워진 블록 수 더하기
    for i in range(len(board)):
        tmp_list,cnt=[],0
        for j in range(len(board[0])):
            if (i,j) in tmp: cnt+=1	# 블록 지워진만큼
            else: tmp_list.append(board[i][j])
        tmp_board.append(tmp_list+[0]*cnt)	# 뒷부분 0으로 채우기
    return game(tmp_board,answer)

def solution(m, n, board):
    return game(list(map(list,zip(*board[::-1]))),0)	# 게임판을 90도 회전시켜서 계산