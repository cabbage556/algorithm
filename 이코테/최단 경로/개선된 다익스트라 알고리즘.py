import heapq
import sys

input = sys.stdin.readline
INF = int(1e9)

# 노드 개수, 간선 개수 입력
n, m = map(int, input().split())

# 시작 노드 번호 입력
start = int(input())

# 그래프
graph = [[] for _ in range(n + 1)]

# 최단 거리 테이블 초기화(무한)
dists = [INF] * (n + 1)

# 모든 간선 정보 입력
for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))  # a 노드 -> b 노드의 비용: c


# 다익스트라 알고리즘
#       최소 힙 기반의 우선순위 큐 사용
#       시간 복잡도 : O(ElogV)
#           E: 간선 개수, V: 노드 개수
def dijkstra(start):
    q = []

    # 시작 노드로의 최단 거리 0으로 설정 후 큐에 삽입 (거리, 노드번호)
    heapq.heappush(q, (0, start))
    dists[start] = 0

    # 큐에 원소가 있을 때까지
    while q:
        # 최단 거리가 가장 짧은 노드 정보 꺼내기
        dist, now = heapq.heappop(q)

        # 이미 최단 경로를 찾은 노드인 경우 무시
        if dists[now] < dist:
            continue

        # 현재 노드와 연결된 인접 노드 확인
        for i in graph[now]:
            cost = dist + i[1]

            # 현재 노드를 거쳐 다른 노드로 이동하는 거리가 더 짧은 경우 업데이트
            if cost < dists[i[0]]:
                dists[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

dijkstra(start)

# 시작 노드부터 모든 노드로의 최단 거리 출력
for i in range(1, n + 1):
    if dists[i] == INF:
        print('INFINITY')
    else:
        print(dists[i])