def p(s,answer):
    if len(s)%2==0:
        while answer<len(s):
            if s[:len(s)//2]==s[len(s)//2:][::-1]: return len(s)
            else: s=s[1:-1]
    else:
        while answer<len(s):
            if s[:len(s)//2]==s[len(s)//2+1:][::-1]: return len(s)
            else: s=s[1:-1]
    return 1
def solution(s):
    answer = 1
    for i in range(len(s)):
        answer=max(answer,p(s[i:],answer))
        answer=max(answer,p(s[:-i],answer))
    return answer