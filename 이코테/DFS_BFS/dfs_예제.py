def dfs(graph, v, visited):
    # 현재 방문 노드 방문 처리
    visited[v] = True
    print(v, end=' ')

    # 현재 노드와 연결된, 아직 방문하지 않은 다른 노드들 재귀 방문
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)


# 각 노드의 연결 정보를 2차원 리스트로 표현
graph = [
    [],
    [2, 3, 8],  # 1번 노드
    [1, 7],     # 2번 노드
    [1, 4, 5],  # 3번 노드
    [3, 5],     # 4번 노드
    [3, 4],     # 5번 노드
    [7],        # 6번 노드
    [2, 6, 8],  # 7번 노드
    [1, 7]      # 8번 노드
]

# 노드 방문 여부를 리스트로 표현
visited = [False] * 9

# dfs 함수 호출
dfs(graph, 1, visited)
