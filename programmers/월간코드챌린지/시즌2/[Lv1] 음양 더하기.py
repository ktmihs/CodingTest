def solution(absolutes, signs):
    ans = 0
    for ab,sign in zip(absolutes,signs): ans=ans+ab if sign else ans-ab
    return ans