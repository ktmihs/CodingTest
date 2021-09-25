def solution(lottos, win_nums):
    lottos=list(filter((0).__ne__, lottos))	# lottos에서 0 제외하기
    return [min(6,len(set(lottos+win_nums))-5),min(6,len(set(lottos+win_nums))+1-len(lottos))]
	# 순위 계산하기
	# 최고 순위 : 7-(len(lottos)+len(win)-set(lottos+win) + len(win)-len(lottos))
			# 1등이 6개 일치이므로, 7-(일치하는 개수+0의 개수)
	# 최저 순위 :  7-(len(lottos)+len(win)-set(lottos+win))
			# 7-일치하는 개수