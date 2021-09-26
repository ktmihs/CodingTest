def solution(arr, divisor):
    answer = [a for a in arr if a%divisor==0]
    if answer: return sorted(answer)
    else: return [-1]