def rotation(key):
    retArr = [[0] * len(key)  for _ in range(len(key))]
    for i in range(len(key)):
        for j in range(len(key)): retArr[j][len(key)-1-i] = key[i][j]
    return retArr

def checkSol(keyArr, lockArr, x, y):
    keySize,lockSize = len(keyArr), len(lockArr)
    board = [[0]*(lockSize*3) for _ in range(lockSize*3)] # 한 부분이라도 맞으려면
    start= lockSize-1
    end = start+lockSize
    for i in range(lockSize):   # boardArr 에 lock 삽입
        for j in range(lockSize): board[start+i][start+j] += lockArr[i][j]        
    for i in range(keySize):    # boardArr 에 key 삽입
        for j in range(keySize): board[i+x][j+y] += keyArr[i][j]   # 값 복사
    for i in range(start, end): # 자물쇠와 열쇠 맞는지 확인
        for j in range(start, end): # 자물쇠 부분에 하나라도 열쇠가 안 맞으면 false
            if board[i][j] != 1 : return False
    return True

def solution(key, lock):
    for _ in range(4):
        for x in range((len(lock)*2)-1):    # lock에 3배 한 arr를 전부 순회
            for y in range((len(lock)*2)-1):
                if checkSol(key, lock, x, y): return True
        key = rotation(key) # key 회전
    return False