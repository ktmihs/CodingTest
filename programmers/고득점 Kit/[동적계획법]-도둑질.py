def solution(money):
    first = [money[0]]+[money[0]]*(len(money)-1)
    for i in range(2, len(first)-1): first[i] = max(first[i-1], money[i]+first[i-2])
    money=money[::-1]
    last = [money[0]]+[money[0]]*(len(money)-1)
    for i in range(2, len(last)-1): last[i] = max(last[i-1], money[i]+last[i-2])
    return max(max(first), max(last))