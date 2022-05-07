def isprime(n):
    if n == 1: return 0
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0: return 0
    return 1
def decToK(n,k):
    T = '0123456789'
    q, r = divmod(n,k)
    if q == 0: return T[r]
    else: return decToK(q, k) + T[r]
def solution(n, k):
    Ps = list(filter(lambda x: x != '', decToK(n, k).split('0')))
    return sum([isprime(int(p)) for p in Ps])