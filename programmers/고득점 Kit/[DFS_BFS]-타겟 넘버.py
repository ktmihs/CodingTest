from collections import deque
def solution(numbers, target):
    answer, stack = 0, deque([(0, 0)])
    while stack:
        curr, i = stack.popleft()
        if i == len(numbers):
            if curr == target: answer += 1
        else:
            stack.append((curr + numbers[i], i + 1))
            stack.append((curr - numbers[i], i + 1))
    return answer