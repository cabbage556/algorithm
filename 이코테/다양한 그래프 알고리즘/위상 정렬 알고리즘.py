# 위상 정렬 알고리즘
#       방향 그래프의 모든 노드를 '방향성에 거슬리지 않도록 순서대로 나열하는 것'
#       순서가 정해져 있는 일련의 작업을 차례대로 수행해야 할 때 사용할 수 있는 알고리즘

from collections import deque

# 노드 개수, 간선 개수 입력
v, e = map(int, input().split())

# 진입차수 리스트
#       모든 노드에 대한 진입차수를 0으로 초기화
indegree = [0] * (v + 1)

# 그래프
#       각 노드와 연결된 간선 정보를 담는 그래프 초기화
graph = [[] for _ in range(v + 1)]

# 방향 그래프의 모든 간선 정보 입력
for _ in range(e):
    a, b = map(int, input().split())
    graph[a].append(b)  # 노드 a에서 노드 b로 이동 가능
    indegree[b] += 1    # 노드 b의 진입차수 1 증가

# 위상 정렬 함수
def topology_sort():
    res = []  # 알고리즘 수행 결과 리스트
    q = deque()  # 진입차수가 0인 노드를 삽입하는 큐

    # 초기 단계: 진입차수가 0인 노드를 큐에 모두 삽입
    for i in range(1, v + 1):
        if indegree[i] == 0:
            q.append(i)

    # 큐가 빌 때까지 반복
    while q:
        now = q.popleft()
        res.append(now)

        # 큐에서 꺼낸 원소와 연결된 노드들의 진입차수에서 1을 빼기
        for i in graph[now]:
            indegree[i] -= 1
            # 진입차수가 0이 되면 노드를 큐에 삽입
            if indegree[i] == 0:
                q.append(i)

    # 위상 정렬 수행 결과 출력
    for i in res:
        print(i, end=' ')

topology_sort()