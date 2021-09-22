def solution(n):
    answer = [[0] * n for _ in range(n)]
    l_,a,b,c,k,num=n,0,1,0,0,1
    while l_!=0:
        if (n-l_)%3==0:
            for i in range(a,l_+a):
                answer[i][k]=num++
                num+=1
            l_,a,k=l_-1,a+2,k+1
        elif (n-l_)%3==1:
            for i in range(b,l_+b):
                answer[-b][i]=num
                num+=1
            l_,b=l_-1,b+1
        else:
            for i in range(l_):
                answer[n-i-2-c][n-i-2-c-c]=num
                num+=1
            l_,c=l_-1,c+1
    return [i for an in answer for i in an if i>0]