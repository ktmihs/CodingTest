def solution(files):
    alpha, digit, a_cnt, d_cnt=[],[],0,0
    for file in files:
        for i in file:
            if not i.isdigit() and d_cnt==0: a_cnt+=1
            else:
                if not i.isdigit(): break
                else: d_cnt+=1
        alpha.append(file[:a_cnt].lower())
        digit.append(int(file[a_cnt:a_cnt+d_cnt]))
        a_cnt=d_cnt=0
    temp=sorted(list(zip(alpha,digit,range(len(alpha)))),key=lambda x:(x[0],x[1]))
    return [files[a] for a in [t[2] for t in temp]]