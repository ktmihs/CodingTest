def solution(skill, skill_trees):
    answer = 0
    for skill_tree in skill_trees:
        tmp=''
        for s in skill_tree:
            if s in skill: tmp+=s
        if tmp==skill[:len(tmp)]: answer+=1
    return answer