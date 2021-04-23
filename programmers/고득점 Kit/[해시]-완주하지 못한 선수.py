def solution(participant, completion):
    participant.sort()
    completion.sort()
    completion.append('')
    dict_part={participant[i] : completion[i] for i in range(len(participant))}
    for key,value in zip(dict_part.keys(),dict_part.values()):
        if key!=value:
            return key
    return 0