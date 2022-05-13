// 3649

import sys
input = sys.stdin.readline

while True:
  try:
    hole = int(input()) * 10000000
    n = int(input())
    lego = [int(input()) for _ in range(n)]
    lego.sort()

    left, right = 0, n - 1
    while left < right:
      if lego[left] + lego[right] == hole:
        print('yes %d %d' %(lego[left], lego[right]))
        break
      elif lego[left] + lego[right] > hole: right-=1
      else: left+=1
    
    if left >= right: print('danger')
  except:
    break