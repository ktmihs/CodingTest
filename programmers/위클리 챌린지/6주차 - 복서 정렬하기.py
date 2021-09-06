def solution(weights, head2head):
    answer = []
    for idx,h2h in enumerate(head2head):
        win=h2h.count('W')/(len(weights)-h2h.count('N')) if h2h.count('W') else 0	# 이긴 횟수
        win_w=map(lambda x:weights[x[0]],filter(lambda h:h[1]=='W' and weights[h[0]]>weights[idx],enumerate(h2h)))	# 무거운 선수를 이긴 횟수
        answer.append([win,len(list(win_w)),weights[idx],idx+1])	# [이긴 횟수, 무거운 선수 이긴 횟수, 몸무게, 순서]
    return [i for _,_,_,i in sorted(answer,key=lambda x:(-x[0],-x[1],-x[2],x[3]))]	# 기준대로 정렬 후, 순서만 리스트로 추출