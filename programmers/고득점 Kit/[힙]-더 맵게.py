import heapq
def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    while scoville[0] < K:
        if len(scoville)==1: return -1
        first=scoville[0]
        heapq.heappop(scoville)
        second=scoville[0]
        heapq.heappop(scoville)
        heapq.heappush(scoville,first+(second*2))
        answer+=1
    return answer