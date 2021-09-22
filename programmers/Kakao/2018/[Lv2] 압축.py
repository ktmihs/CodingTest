def solution(msg):
    answer, dic, i = [], {}, 1
    for x in range(65, 91): dic[chr(x)]=len(dic)+1
    while i<=len(msg):
        if msg[:i] not in dic:	# dict에 없으면 넣어주기
            answer.append(dic[msg[:i-1]])	# 새로운 색인 번호 추가
            dic[msg[:i]]=len(dic)+1
            msg=msg[i-1:]
            i=1
        i+=1
    answer.append(dic[msg])
    return answer