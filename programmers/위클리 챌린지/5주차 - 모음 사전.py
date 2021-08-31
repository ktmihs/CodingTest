def solution(word):
    answer,stack = 1,['A']
    dic={'A':1,'E':2,'I':3,'O':4,'U':5,1:'A',2:'E',3:'I',4:'O',5:'U'}
    while word!=''.join(stack):
        if len(stack)<5: stack.append('A');answer+=1
        else:
            while stack[-1]=='U': stack.pop()
            stack.append(dic[dic[stack.pop()]+1])
            answer+=1
    return answer