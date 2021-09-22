import re
from itertools import cycle
def change(code):	# #이 아닌 음은 0을 붙여줌
    for i in range(len(code)-2,-1,-1):
        if code[i:i+2].isalpha():  code=code[:i+1]+'0'+code[i+1:]
    if code[-1].isalpha():  code+='0'
    return code

def solution(m, musicinfos):
    tmp, name, m = '', [], change(m)
    for music in musicinfos:
        music_len=((int(music[6:8])*60+int(music[9:11]))-(int(music[0:2])*60+int(music[3:5])))*2	# 노래 길이 초로 변환
        code = change(re.split(',+',music)[3])
        c=cycle(list(code))	# 코드 리스트로 변경+cycle
        while music_len!=len(tmp):  tmp+=next(c)	# 노래 길이 맞춰서 계속 반복
        if m in tmp:  name.append((music_len,len(name)+1,re.split(',+',music)[2]))
        tmp=''
    if not name: return '(None)'
    return sorted(name, key=lambda x:(-x[0],x[1]))[0][2]