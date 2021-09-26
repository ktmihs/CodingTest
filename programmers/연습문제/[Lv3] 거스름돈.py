def solution(n, money):
    sol=[1]+[0]*n   # [1,0*n]
    for coin in money:  # 각 코인에 대하여
        for price in range(coin,n+1): sol[price]+=sol[price-coin] # n까지의 금액을 만들 수 있는 수를 계산, price까지의 가짓수는 price-coin의 가짓수+현재 coin(1개)
    return sol[n]%1000000007