def is_available(check,col):
    row=len(check)
    for q_row in range(row):
        if col==check[q_row] or abs(col-check[q_row])==row-q_row: return False
    return True
def DFS(n,check,row,result):
    if row==n:
        result.append(check[:])
        return
    for col in range(n):
        if is_available(check, col):
            check.append(col)
            DFS(n,check,row+1,result)
            check.pop()
    return len(result)
def solution(n):
    return DFS(n,[],0,[])