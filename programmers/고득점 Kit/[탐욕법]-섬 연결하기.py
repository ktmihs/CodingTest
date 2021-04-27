from collections import defaultdict as dfd
from heapq import *
def solution(n, costs):
    answer,edges=0,dfd(list)
    for n1,n2,w in costs: 
        edges[n1].append([w,n1,n2])
        edges[n2].append([w,n2,n1])
    connected,edge_list = [costs[0][0]],edges[costs[0][0]]
    heapify(edge_list)
    while edge_list:
        w,_,n2=heappop(edge_list)
        if n2 not in connected:
            connected.append(n2); answer+=w
            for edge in edges[n2]:
                if edge[2] not in connected: heappush(edge_list,edge)
    return answer