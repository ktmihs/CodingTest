import datetime
def solution(a, b):
    return datetime.date(2016,a,b).strftime('%A')[:3].upper()