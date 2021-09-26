from math import gcd
def solution(arr):
    def lcm(a,b): return a*b//gcd(a,b)
    while len(arr)!=1: arr.append(lcm(arr.pop(),arr.pop()))
    return arr[0]