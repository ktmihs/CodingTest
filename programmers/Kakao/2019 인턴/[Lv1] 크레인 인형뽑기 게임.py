def solution(board, moves):
    answer, stack = 0, []
    board = [list(b) for b in zip(*board[::-1])]
    for i in moves:
        while board[i-1]:
            if board[i-1][-1] > 0:
                stack.append(board[i-1].pop())
                break
            else: del board[i-1][-1]
        if len(stack) > 1 and stack[-1]==stack[-2]:
            del stack[-2:]
            answer+=2
    return answer