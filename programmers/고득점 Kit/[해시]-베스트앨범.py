def solution(genres, plays):
    answer = []
    genres_total={}
    list_total=[]
    x=[]
    for g, p, i in zip(genres, plays,range(len(plays))):
        if g not in genres_total:
            genres_total[g]=p
        else:
            genres_total[g]+=p
        x.append(i)    
    genres_total=dict(sorted(genres_total.items(),key= lambda item:-item[1]))
    for key,i in zip(genres_total.keys(),range(len(genres_total))):
        genres_total[key]=i
    list_total=list(zip(genres,plays,x))
    list_total=sorted(list_total, key=lambda x:(genres_total[x[0]],-x[1]))

    for i in range(len(list_total)):
        if i==0:
            cnt=1
            answer.append(list_total[i][2])
        elif list_total[i-1][0]==list_total[i][0]:
            if cnt<2:
                answer.append(list_total[i][2])
            cnt+=1
        elif list_total[i-1][0]!=list_total[i][0]:
            cnt=1
            answer.append(list_total[i][2])
    return answer