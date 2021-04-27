def solution(routes):
    routes=sorted(routes,key=lambda x:x[1])
    answer,camera=0,-30001
    for route in routes:
        if route[0]>camera: answer+=1;camera=route[1]
    return answer