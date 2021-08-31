def solution(table, languages, preference):
    answer = []
    for work in table:
        score=work.split(' ')
        score_sum=0
        for i in range(len(score)):
            if i==0: work_name=score[i]
            elif score[i] in languages:   # 직업군 언어점수 * 언어 선호도
                score_sum+=(6-i)*preference[languages.index(score[i])]
        answer.append([score_sum,work_name])
    return sorted(answer,key=lambda x:(-x[0],x[1]))[0][1]