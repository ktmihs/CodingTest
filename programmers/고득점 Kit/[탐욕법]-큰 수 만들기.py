def solution(num, k):
    stack=[num[0]]
    ans=len(num)-k
    for n in num[1:]:
        while k!=0 and stack and stack[-1]<n:
            stack.pop()
            k-=1
        stack.append(n)
    return ''.join(stack)[:ans]