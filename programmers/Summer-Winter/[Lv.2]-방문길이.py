def solution(dirs):
    pos,route=[0,0],[]
    for dir in dirs:
        if dir=='U' and pos[1]+1<=5: tmp=[pos[0],pos[1]+1]
        elif dir=='D'and pos[1]-1>=-5: tmp=[pos[0],pos[1]-1]
        elif dir=='R' and pos[0]+1<=5: tmp=[pos[0]+1,pos[1]]
        elif dir=='L' and pos[0]-1>=-5: tmp=[pos[0]-1,pos[1]]  
        if pos!=tmp and [pos,tmp] not in route and [tmp,pos] not in route: route.append([pos,tmp])
        pos=tmp
    return len(route)