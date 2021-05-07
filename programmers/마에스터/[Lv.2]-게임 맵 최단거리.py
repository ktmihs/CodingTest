def solution(maps):
    dirs,queue = [(1,0),(-1,0),(0,1),(0,-1)],[[0,0]]
    max_x,max_y=len(maps)-1,len(maps[0])-1
    while queue:
        x, y = queue.pop(0)    # 현재 x,y좌표, 방문 수
        for dx, dy in dirs:         # 상하좌우에 대해
            nx, ny = x+dx, y+dy
            if 0<=nx<=max_x and 0<=ny<=max_y and maps[nx][ny]==1:
                maps[nx][ny]=maps[x][y]+1
                queue.append([nx, ny])
            if nx == max_x and ny == max_y: return maps[nx][ny]
    return -1