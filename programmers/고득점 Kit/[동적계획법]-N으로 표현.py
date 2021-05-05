def solution(N, number):
    N_list=[[] for i in range(9)]   # index 번호==N 사용 횟수
    N_list[1],tmp = [N],N
    if N==number: return 1
    for i in range(2,9):            # N 사용 8회까지
        tmp+=(N*(10**(i-1)))        # N을 연달아 작성
        if tmp==number: return i
        N_list[i].append(tmp)       # i회에 추가
        for j in range(0,i):        # i회 == i-J회 (연산) J회
            for n in N_list[j]:
                for m in N_list[i-j]:
                    L=[n+m,n-m,n//m,n*m]
                    if 0 in L: L.remove(0)  # 이후 나누기 연산 시 에러 방지
                    if number in L: return i
                    else: N_list[i].extend(L)
        N_list[i]=list(set(N_list[i]))      # 실행 시간을 고려해 중복 제거
    return -1