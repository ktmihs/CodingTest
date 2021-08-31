def solution(scores):
    answer = ''
    grade={9:'A',8:'B',7:'C',6:'D',5:'D',4:'F',3:'F',2:'F',1:'F',0:'F'}
    score=list(map(list,zip(*scores)))
    for i in range(len(score)):
        if score[i][i]<min(score[i][:i]+score[i][i+1:]) or score[i][i]>max(score[i][:i]+score[i][i+1:]): answer+=(grade[sum(score[i][:i]+score[i][i+1:])//(len(score)-1)//10])
        else: answer+=(grade[sum(score[i])//(len(score))//10])
    return answer