from collections import deque

# maps: n x m 크기의 2차원 배열
#	n: 1~100, m: 1~100
#	0: 벽이 있는 자리, 1: 벽이 없는 자리
def solution(maps):
    n = len(maps)
    m = len(maps[0])
    visited = [[0] * m for _ in range(n)]
    dy = [-1, 0, 1, 0]
    dx = [0, 1, 0, -1]
    
    visited[0][0] = 1
    q = deque()
    q.append((0, 0))
    while q:
        y, x = q.popleft()
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            if ny < 0 or ny >= n or nx < 0 or nx >= m:
                continue
            if maps[ny][nx] == 0 or visited[ny][nx] > 0:
                continue
                
            visited[ny][nx] = visited[y][x] + 1
            q.append((ny, nx))
    
    if visited[n - 1][m - 1] == 0:
        return -1
    return visited[n - 1][m - 1]