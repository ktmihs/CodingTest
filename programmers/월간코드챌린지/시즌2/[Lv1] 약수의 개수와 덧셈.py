# 1
def counter(num):
    count=0
    for i in range(1,num+1):
        if num%i==0: count+=1
    return count
def solution(left, right):
    answer=0
    for i in range(left,right+1):
        num=counter(i)
        answer=answer-i if num%2==1 else answer+i
    return answer

# 2 - 제곱수는 약수의 개수가 홀수개임
def solution(left, right):
    answer=0
    for i in range(left, right+1):
        answer=answer-i if int(i**0.5)==i**0.5 else answer+i
    return answer