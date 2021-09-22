def solution(s):
    answer, temp = [], []
    for s_ in s[2:-2].replace('},{', ' ').split():
        temp.append([int(i) for i in s_.split(',')])
    temp=sorted(temp, key=lambda x: len(x))
    answer.append(temp[0][0])
    for i in range(1,len(temp)):
        temp[i] = [x for x in temp[i] if x not in answer]
        answer.append(temp[i][0])
    return answer