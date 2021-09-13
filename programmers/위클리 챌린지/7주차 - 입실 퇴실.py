def solution(enter, leave):
    answer,room,out = [0 for _ in range(len(enter))],[],[]
    for e,i in zip(enter,leave):
        answer[e-1]=len(room)   # 현재 들어가는 사람은 안에 있는 사람 전부 만남
        room.append(e); out.append(i)  
        for r in room[:-1]: answer[r-1]+=1  # 안에 있던 사람들은 현재 들어가는 사람 만남
        while out and out[0] in room: room.remove(out.pop(0))   # 순서대로 나감
    return answer