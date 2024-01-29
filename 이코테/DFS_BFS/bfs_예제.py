from collections import deque


def bfs(graph, start, visited):
    # deque 라이브러리로 큐 사용
    q = deque([start])

    # 현재 방문 노드 방문 처리
    visited[start] = True

    # 큐에 노드가 없을 때까지
    while q:
        # 큐의 첫 번째 노드를 뽑음
        v = q.popleft()
        print(v, end=' ')

        # 뽑은 노드와 연결된, 아직 방문하지 않은 노드들 큐에 삽입, 방문 처리
        for i in graph[v]:
            if not visited[i]:
                q.append(i)
                visited[i] = True


# 각 노드의 연결 정보를 2차원 리스트로 표현
graph = [
    [],
    [2, 3, 8],  # 1번 노드
    [1, 7],  # 2번 노드
    [1, 4, 5],  # 3번 노드
    [3, 5],  # 4번 노드
    [3, 4],  # 5번 노드
    [7],  # 6번 노드
    [2, 6, 8],  # 7번 노드
    [1, 7]  # 8번 노드
]

# 노드 방문 여부를 리스트로 표현
visited = [False] * 9

# bfs 함수 호출
bfs(graph, 1, visited)
