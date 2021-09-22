def solution(lines):
    answer,times = 0,[]
    for line in lines:	# string->num 변환
        time=(line.split(' ')[1]).split(':')
        end_time=(int(time[0])*60+int(time[1]))*60+float(time[2])
        start_time=end_time-float((line.split(' ')[2]).split('s')[0])+0.001
        times.append([round(start_time,3),end_time])
    for s,e in times:	# 모든 time들에 대해 각각의 시작과 끝 부분만 비교
        ssum,esum=0,0
        for ss,ee in times:	# 1초 범위에 시작 부분이 포함, 끝 부분이 포함, 전체가 포함
            if (s<=ss and ss<s+1) or (s<=ee and ee<s+1) or (ss<=s and s+1<=ee) : ssum+=1
            if (e<=ss and ss<e+1) or (e<=ee and ee<e+1) or (ss<=e and e+1<=ee) : esum+=1

        answer=max(answer,ssum,esum)
    return answer