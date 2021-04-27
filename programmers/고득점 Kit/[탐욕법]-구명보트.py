def solution(people, limit):
    answer,i,j = 0, 0, len(people)-1
    people.sort()
    while i<j:
        if people[i]+people[j] <= limit: i,j,answer = i+1,j-1,answer+1
        else: j-=1
    return len(people)-answer