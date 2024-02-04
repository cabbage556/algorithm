# n: 회사 개수, m: 경로 개수
n, m = map(int, input().split())

# 그래프 무한으로 초기화
INF = int(1e9)
graph = [[INF] * (n + 1) for _ in range(n + 1)]

# 자기 자신의 거리 0 할당
for a in range(1, n + 1):
    graph[a][a] = 0

# 연결된 간선 비용은 양쪽으로 모두 1
for _ in range(m):
    a, b = map(int, input().split())
    graph[a][b] = 1
    graph[b][a] = 1

x, k = map(int, input().split())

# 플로이드 워셜 알고리즘
#       사용 이유: 모든 노드로부터 모든 노드까지의 최소 비용 계산 필요
for k in range(1, n + 1):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

# 1부터 x까지의 최소 이동 시간 = (1 -> k 최소 이동 시간) + (k -> x 최소 이동 시간)
t = graph[1][k] + graph[k][x]
if t >= INF:
    print(-1)
else:
    print(t)
