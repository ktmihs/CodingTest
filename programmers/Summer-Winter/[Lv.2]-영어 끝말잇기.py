def solution(n, words):
    for i in range(1,len(words)):
        if words[i] in words[:i] or words[i][0]!=words[i-1][-1]:
            if (i+1)%n==0: return [n, (i+1)//n]
            else: return [(i+1)%n, (i+1)//n+1]
    return [0,0]