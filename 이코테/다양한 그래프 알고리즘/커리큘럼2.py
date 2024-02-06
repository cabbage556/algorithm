from collections import deque
import copy

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
    res = copy.deepcopy(times)  # 원본 시간을 유지하기 위해 깊은 복사

    # 진입차수가 0인 노드를 큐에 삽입
    for i in range(1, n + 1):
        if indegree[i] == 0:
            q.append(i)

    while q:
        now = q.popleft()

        # 현재 노드의 인접 노드 순회
        for i in graph[now]:
            # 인접 노드에 대해 현재보다 강의 시간이 더 길다면 업데이트
            res[i] = max(res[i], res[now] + times[i])
            # 진입차수 1 빼기
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)

    for i in range(1, n + 1):
        print(res[i])

topology_sort()
