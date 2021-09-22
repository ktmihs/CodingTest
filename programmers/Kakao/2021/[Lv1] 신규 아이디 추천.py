import re
def solution(new_id):
    answer = ''.join(re.findall(r'\w*\-*\_*\.*', new_id.lower()))
    answer = re.sub(r'\.+','.',answer)
    if len(answer)>0 and answer[0]=='.': answer=answer[1:]
    if len(answer)>0 and answer[-1]=='.': answer=answer[:-1]
    if len(answer)==0: answer='a'
    if len(answer)>15: answer=answer[:15]
    if len(answer)==15 and answer[-1]=='.': answer=answer[:-1]
    while len(answer)<3: answer+=answer[-1]
    return answer