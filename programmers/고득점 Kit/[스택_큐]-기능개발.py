import math
def solution(progresses, speeds):
    pro_list=[math.ceil((100-pro)/sp) for pro,sp in zip(progresses,speeds)]
    answer, temp = [0], pro_list[0]
    for pro in pro_list:
        if temp >= pro: answer.append(answer.pop()+1)
        else: temp = pro; answer.append(1)
    return answer