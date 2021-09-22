def solution(s):
    answer, count, origin= len(s), 1, s
    str_s=''
    for n in range(1,answer):
        while s:
            temp=s[:n]
            s=s[n:]
            if temp==s[:n]: count+=1
            else:
                if count>1: str_s+=str(count)+temp
                else: str_s+=temp
                count=1
                temp=s[:n]
        print(str_s)
        answer=min(answer,len(str_s))
        s,str_s=origin,''
    return answer