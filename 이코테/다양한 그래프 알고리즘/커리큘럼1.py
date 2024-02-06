# 어떤 강의에 선수 강의가 있으면 선수 강의를 수강하고 해당 강의를 수강할 수 있음
#   알고리즘의 선수 강의 : 자료구조, 컴퓨터 기초
#       자료구조, 컴퓨터 기초 수강 후 알고리즘 수강 가능

from collections import deque

# 강의 개수 입력
n = int(input())

# 진입차수 테이블, 시간 테이블, 그래프
indegree = [0] * (n + 1)
times = [0] * (n + 1)
graph = [[] for _ in range(n + 1)]

# 강의 시간, 선수 강의 입력
for i in range(1, n + 1):
    li = list(map(int, input().split()))
    times[i] = li[0]
    for x in li[1:-1]:
        indegree[i] += 1
        graph[x].append(i)

# 위상 정렬
def topology_sort():
    q = deque()

    # 진입차수가 0인 노드를 큐에 삽입
    for i in range(1, n + 1):
        if indegree[i] == 0:
            q.append(i)

    while q:
        now = q.popleft()

        # 현재 노드의 인접 노드 순회
        for i in graph[now]:
            # 진입차수 1 빼기
            indegree[i] -= 1
            # 진입차수가 0이 되는 경우 큐에 삽입, 현재 노드의 최소 시간만큼 더하기
            if indegree[i] == 0:
                q.append(i)
                times[i] += times[now]

topology_sort()

for i in range(1, n + 1):
    print(times[i])