cnt = 0
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

def dfs(graph, y, x, visited):
    visited[y][x] = True

    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if ny < 0 or ny >= n or nx < 0 or nx >= m:
            continue
        if visited[ny][nx] or graph[ny][nx] == 1:
            continue

        dfs(graph, ny, nx, visited)

    return 1

n, m = map(int, input().split())
graph = [[0] * m for _ in range(n)]  # n x m 얼음 틀
for i in range(n):
    temp = input()
    for j in range(m):
        graph[i][j] = int(temp[j])

visited = [[False] * m for _ in range(n)]  # 방문 여부

for i in range(n):
    for j in range(m):
        if graph[i][j] == 0 and not visited[i][j]:
            cnt += dfs(graph, i, j, visited)

print(cnt)
