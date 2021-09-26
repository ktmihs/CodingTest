def solution(arr1, arr2):
    answer = []
    for i in range(len(arr1)):
        tmp_arr=[]
        for t in range(len(arr2[0])):
            tmp=0
            for j in range(len(arr2)): tmp+=arr1[i][j]*arr2[j][t]
            tmp_arr.append(tmp)
        answer.append(tmp_arr)
    return answer