def solution(n):
    answer = []
    def hanoi(N, start, to, via):
        if N == 1: answer.append([start, to]); return
        hanoi(N-1, start, via, to)  # via로 N-1까지 옮기기
        answer.append([start, to])  # N원판을 to로 옮김
        hanoi(N-1, via, to, start)  # N원판 위로 via 위에 있는 1~N-1까지의 원판 옮기기
    hanoi(n,1,3,2)
    return answer