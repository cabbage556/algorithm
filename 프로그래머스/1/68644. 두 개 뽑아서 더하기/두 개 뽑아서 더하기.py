from itertools import combinations

def solution(numbers):
    ret = []
    combi = list(combinations(numbers, 2))
    for com in combi:
        ret.append(com[0] + com[1])
        
    ret = sorted(set(ret))
    return ret
