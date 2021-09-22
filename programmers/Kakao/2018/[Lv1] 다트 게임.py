import re
def solution(dartResult):
    fir,sec,thi=re.findall('\d+',dartResult)
    total, i=[int(fir),int(sec),int(thi)], -1
    dartResult=''.join(re.findall('\D+',dartResult))
    for dart in dartResult:
        if dart.isalpha():
            i+=1
            if dart=='S': total[i]**=1
            elif dart=='D': total[i]**=2
            elif dart=='T': total[i]**=3
        else:
            if dart=='*':
                total[i]*=2
                if i>0: total[i-1]*=2
            if dart=='#': total[i]*=(-1)
    return sum(total)