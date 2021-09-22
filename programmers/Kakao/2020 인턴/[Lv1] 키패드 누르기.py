def now_hand(l, r, p, h):
    if abs(l[0]-p[0])+abs(l[1]-p[1]) < abs(r[0]-p[0])+abs(r[1]-p[1]): return 'L'
    elif abs(l[0]-p[0])+abs(l[1]-p[1]) > abs(r[0]-p[0])+abs(r[1]-p[1]): return 'R'
    else: 
        if h=='right': return 'R'
        else: return 'L'
def solution(numbers, hand):
    answer, left, right = '', [3,0], [3,2]
    key = {1:'L',4:'L',7:'L',3:'R',6:'R',9:'R'}
    pos = {1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],8:[2,1],9:[2,2],0:[3,1]}
    for num in numbers:
        if num in key:
            answer+=key[num]
            if key[num]=='L': left=pos[num]
            else: right=pos[num]
        else:
            temp = now_hand(left, right, pos[num], hand)
            answer+=temp
            if temp =='L': left=pos[num]
            else: right=pos[num]
    return answer