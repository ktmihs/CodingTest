def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1, arr2):
        temp=str(bin(i|j)[2:]).zfill(n)	# 각 줄에 대해 or 비트 연산을 통해 n자리수를 채움(zfill(n)는 앞 부분이 0일 경우도 고려함)
        temp=temp.replace('1','#')	# 1인 부분은 #으로
        temp=temp.replace('0',' ')	# 0인 부분은 공백으로 변환
        answer.append(temp)
    return answer