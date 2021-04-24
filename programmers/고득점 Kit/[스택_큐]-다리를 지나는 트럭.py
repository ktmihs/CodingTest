from collections import deque
def solution(bridge_length, weight, truck_weights):
    answer = 0
    queue=deque([0]*bridge_length)
    truck=deque(truck_weights)
    total=0
    while len(truck) != 0:
        if queue[0]!=0:
            total-=queue[0]
        queue.popleft()
        answer+=1
        if total+truck[0] <= weight:
            queue.append(truck[0])
            total+=truck[0]
            truck.popleft()
        else:
            queue.append(0)
    return answer+bridge_length