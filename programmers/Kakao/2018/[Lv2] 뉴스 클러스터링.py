from collections import Counter
def solution(str1, str2):
    temp1, temp2, len_or, len_and = [], [], 0, 0
    #str1,str2 = str1.lower(),str2.lower()
    for i in range(len(str1)-1):
        if str1[i:i+2].isalpha(): temp1.append(str1[i:i+2].lower())
    for i in range(len(str2)-1):
        if str2[i:i+2].isalpha(): temp2.append(str2[i:i+2].lower())
    
    temp_or = Counter(temp1) | Counter(temp2)
    temp_and = Counter(temp1) & Counter(temp2)
    if not temp_or: return 65536
    print(len(sum(temp_and.values())))
    #return int(len(sum(temp_and.values()))/len(sum(temp_or.values()))*65536)