import heapq
def solution(N, road, K):
    network={n:{} for n in range(1,N+1)}
    for a,b,c in road:
        if b in network[a]: network[a][b]=min(c,network[a][b])
        else: network[a][b]=c
        if a in network[b]: network[b][a]=min(c,network[b][a])
        else: network[b][a]=c
    distances = {node: float('inf') for node in range(1,N+1)}
    distances[1] = 0
    queue = []
    heapq.heappush(queue, [0, 1])
    while queue:
        time, node=heapq.heappop(queue)
        if distances[node]<time: continue
        for adj, weight in network[node].items():   
            distance=weight+time
            if distance<distances[adj]:
                distances[adj]=distance
                heapq.heappush(queue, [distance,adj])
    return len([i for i in distances.values() if i<=K])