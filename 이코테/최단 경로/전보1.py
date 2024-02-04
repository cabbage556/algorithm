import heapq

# n: 도시 개수, m: 통로 개수, c: 메시지를 보내는 도시(시작 도시)
n, m, c = map(int, input().split())

INF = int(1e9)
dists = [INF] * (n + 1)
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    # x로부터 y까지의 메시지 전송 시간 z
    x, y, z = map(int, input().split())
    graph[x].append((y, z))  # (도시번호, 전송시간)

# 다익스트라 알고리즘
def dijk(start):
    q = []
    heapq.heappush(q, (0, start))  # (최단시간, 도시번호)
    dists[start] = 0

    while q:
        dist, now = heapq.heappop(q)
        # 이미 최단시간인 경우 무시
        if dists[now] < dist:
            continue

        # 현재 방문 노드의 인접 노드에 대해 시간 계산
        for i in graph[now]:
            cost = dist + i[1]
            if cost < dists[i[0]]:
                dists[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

# 시작 도시로부터의 최소 시간 계산
dijk(c)

# 전송 가능 도시 개수: 최단시간이 INF가 아닌 경우
# 전송 총 시간: 최단시간의 최대값
cnt = 0
max_t = 0
for i in range(1, n + 1):
    if i == c:
        continue
    if dists[i] != INF:
        cnt += 1
        max_t = max(max_t, dists[i])

print(cnt, max_t)
