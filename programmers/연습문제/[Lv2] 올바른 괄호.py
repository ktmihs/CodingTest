def solution(s):
    stack=[]
    for i in s:
        if i==')' and not stack: return False
        elif i==')': stack.pop()
        else: stack.append(i)
    return not stack