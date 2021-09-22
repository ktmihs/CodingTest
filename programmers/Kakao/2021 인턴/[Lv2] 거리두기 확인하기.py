def solution(places):
    answer,part=[],['PX','OP','PP','PO','P']
    for p in places:
        tmp=1
        for i in range(5):
            if tmp==0: break
            for j in range(5):
                if p[i][j]=='P':
                    if j<4 and p[i][j+1:j+3] in part:tmp=0  #오른쪽 검사
                    elif i<3 and p[i+1][j]+p[i+2][j] in part:tmp=0  #아래 검사
                    elif i==3 and p[i+1][j]=='P':tmp=0
                    elif (i<4 and j<4) and (p[i+1][j+1]=='P'and('X'!=p[i+1][j] or 'X'!=p[i][j+1])):tmp=0    #대각선 \ 검사
                    elif (i>0 and j<4) and (p[i-1][j+1]=='P'and('X'!=p[i-1][j] or 'X'!=p[i][j+1])):tmp=0    #대각선 / 검사
                if tmp==0: break
        answer.append(tmp)
    return answer