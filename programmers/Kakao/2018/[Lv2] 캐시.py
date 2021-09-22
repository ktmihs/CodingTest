from collections import deque
def solution(cacheSize, cities):
    answer = 0
    Q = deque([""]*cacheSize)	# 캐시
    if cacheSize==0: return len(cities)*5	# 캐시에 저장할 수 없는 경우
    for city in cities:
        city=city.lower()	# 모두 소문자로 변경
        if city in Q: # 캐시 안에 있을 경우
            Q.remove(city)
            Q.append(city)
            answer+=1
        else: # 캐시 안에 없을 경우
            Q.popleft()
            Q.append(city)
            answer+=5
    return answer