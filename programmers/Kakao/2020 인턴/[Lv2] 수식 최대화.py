def calc(priority, n, expression):
    if n == 2:
        return str(eval(expression))
    if priority[n] == '*':
        tmp = eval('*'.join([calc(priority, n+1, e) for e in expression.split('*')]))
    if priority[n] == '+':
        tmp = eval('+'.join([calc(priority, n+1, e) for e in expression.split('+')]))
    if priority[n] == '-':
        tmp = eval('-'.join([calc(priority, n+1, e) for e in expression.split('-')]))
    return str(tmp)

def solution(expression):
    answer = 0
    priorities = [ ('*', '-', '+'),('*', '+', '-'),('+', '*', '-'),
        ('+', '-', '*'),('-', '*', '+'),('-', '+', '*')]
    for priority in priorities:
        tmp = int(calc(priority, 0, expression))
        answer = max(answer, abs(tmp))
    return answer