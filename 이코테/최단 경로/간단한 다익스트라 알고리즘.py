import sys

input = sys.stdin.readline
INF = int(1e9)

# 노드의 개수, 간선의 개수 입력
n, m = map(int, input().split())

# 시작 노드 번호 입력
start = int(input())

# 그래프
graph = [[] for _ in range(n + 1)]

# 방문 확인 리스트
visited = [False] * (n + 1)

# 최단 거리 테이블 초기화(무한: INF)
dists = [INF] * (n + 1)

# 모든 간선 정보 입력
for _ in range(m):
    a, b, c = map(int, input().split())
    # a -> b 의 이동 비용 : c
    graph[a].append((b, c))

# 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드의 번호 반환
def get_smallest_node():
    min_val = INF
    index = 0  # 최단 거리가 가장 짧은 노드

    # 1번 노드부터 n번 노드까지 순차 탐색
    for i in range(1, n + 1):
        if dists[i] < min_val and not visited[i]:
            min_val = dists[i]
            index = i
    return index

# 다익스트라 알고리즘
#       시간 복잡도: O(V^2)
#           V: 노드의 개수
def dijkstra(start):
    # 시작 노드에 대해 초기화
    dists[start] = 0
    visited[start] = True
    for j in graph[start]:
        dists[j[0]] = j[1]

    # 시작 노드를 제외한 전체 n - 1개의 노드에 대해 반복
    for i in range(n - 1):
        # 최단 거리가 가장 짧은 노드에 대해 방문 처리
        now = get_smallest_node()
        visited[now] = True

        # 현재 노드와 연결된 다른 노드 확인
        for j in graph[now]:
            cost = dists[now] + j[1]

            # 현재 노드를 거쳐 다른 노드로 이동하는 거리가 더 짧으면 최단 거리 테이블 업데이트
            if cost < dists[j[0]]:
                dists[j[0]] = cost

dijkstra(start)

# 모든 노드로 가기 위한 최단 거리 출력
for i in range(1, n + 1):
    if dists[i] == INF:
        print("INFINITY")
    else:
        print(dists[i])
