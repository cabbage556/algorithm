from collections import deque

n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input())))

# 상우하좌 네 방향
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

def bfs(y, x):
    q = deque()
    q.append((y, x))

    while q:
        y, x = q.popleft()

        # 상우하좌 네 방향의 노드 확인
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            if ny < 0 or ny >= n or nx < 0 or nx >= m:
                continue

            # 괴물인 경우 방문하지 않음
            if graph[ny][nx] == 0:
                continue

            # 아직 방문하지 않은 경우 최단 거리 저장 후 방문
            if graph[ny][nx] == 1:
                graph[ny][nx] = graph[y][x] + 1
                q.append((ny, nx))

    return graph[n - 1][m - 1]

print(bfs(0, 0))