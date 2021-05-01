from collections import defaultdict as dfd
def solution(tickets):
    def dfs():
        stack,path=['ICN'],[]
        while len(stack)>0:
            top=stack[-1]
            if top not in routes or len(routes[top])==0: path.append(stack.pop())
            else: stack.append(routes[top].pop(0))
        return path[::-1]
    routes=dfd(list)
    for key, value in tickets: routes[key].append(value)
    for r in routes: routes[r].sort()
    return dfs()