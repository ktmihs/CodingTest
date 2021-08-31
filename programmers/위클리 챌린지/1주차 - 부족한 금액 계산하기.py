def solution(price, money, count):
    answer = price*(((count+1)*count)//2)-money
    return answer if answer>0 else 0