n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input())))

def dfs(y, x):
    # 그래프 범위를 벗어나면 종료
    if y < 0 or y >= n or x < 0 or x >= m:
        return False

    if graph[y][x] == 0:
        graph[y][x] = 1  # 방문 처리
        dfs(y - 1, x)  # 상
        dfs(y + 1, x)  # 하
        dfs(y, x - 1)  # 좌
        dfs(y, x + 1)  # 우
        return True

    return False

res = 0
for i in range(n):
    for j in range(m):
        # 현재 방문 노드에서 DFS 수행
        if dfs(i, j):
            res += 1

print(res)
