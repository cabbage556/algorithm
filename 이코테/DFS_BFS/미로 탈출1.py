from collections import deque

n, m = map(int, input().split())

graph = []  # n x m 미로
for _ in range(n):
    graph.append(list(map(int, input())))

visited = [[0] * m for _ in range(n)]  # 방문 처리
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

def bfs(y, x):
    visited[y][x] = 1
    q = deque([(y, x)])

    while q:
        y, x = q.popleft()

        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            if ny < 0 or ny >= n or nx < 0 or nx >= m:
                continue
            if visited[ny][nx] > 0 or graph[ny][nx] == 0:
                continue

            visited[ny][nx] = visited[y][x] + 1
            q.append((ny, nx))

    return visited[n - 1][m - 1]

print(bfs(0, 0))