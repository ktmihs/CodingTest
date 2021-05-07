from collections import deque
def solution(s):
    s=deque(s)
    stack=[s.popleft()]
    while s:
        stack.append(s.popleft())
        if len(stack)>1 and stack[-1]==stack[-2]:
            stack.pop()
            stack.pop()
    if stack: return 0
    else: return 1