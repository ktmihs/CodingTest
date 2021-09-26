def solution(n):
    for i in range(n+1, int(bin(n)+'1',2)):
        if bin(i).count('1')==bin(n).count('1'): return i