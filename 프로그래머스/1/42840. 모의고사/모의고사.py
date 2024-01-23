def solution(answers):
    ways = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    pts = [0] * 3
    for i, ans in enumerate(answers):
        for j, way in enumerate(ways):
            if ans == way[i % len(way)]:
                pts[j] += 1
    
    max_pt = max(pts)
    ret = []
    for i, pt in enumerate(pts):
        if pt == max_pt:
            ret.append(i + 1)

    return ret