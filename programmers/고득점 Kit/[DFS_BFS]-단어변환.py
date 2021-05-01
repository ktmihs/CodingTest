def solution(n, computers):
    answer, queue, v = 0, [], [0]*n
    while 0 in v:
        queue.append(v.index(0))
        while queue:
            now=queue.pop(0); v[now]=1
            for i in range(n):
                if v[i]==0 and computers[now][i]==1: queue.append(i)
        answer+=1def is_change(begin,word):
    for i in begin:
        if i in word: word.remove(i)    #겹치는 글자 제거, 서로 다른 글자가 1개인 경우
    if len(word)==1: return True
    return False
def find(b,t,words,visit,result):
    if b==t and len(visit)<len(result): return visit[:]
    for word in words:
        if is_change(b,list(word)):
            visit.append(word)
            words.remove(word)
            result=find(word,t,words,visit,result)
            words.append(visit.pop())
    return result
def solution(begin, target, words):
    word_len=len(find(begin,target,words,[],[_ for _ in range(len(words)+1)]))
    if len(words)<word_len: return 0
    return word_len
    return answer