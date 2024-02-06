# 최소 신장 트리를 만드는데 필요한 비용을 계산하는 크루스칼 알고리즘
#       신장 트리
#           그래프에서 모든 노드를 포함하고, 사이클이 존재하지 않는 부분 그래프
#       최소 신장 트리
#           신장 트리 중에서 최소 비용으로 만들 수 있는 신장 트리
#       크루스칼 알고리즘
#           최소 신장 트리를 찾는 대표적인 알고리즘

# 특정 원소가 속한 집합 찾기
#       노드의 루트 노드가 같으면 서로 같은 집합
def find_parent(parent, x):
    # 루트 노드를 찾을 때까지 재귀 호출
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

# 합치기 연산: 두 노드를 같은 집합에 포함시키기
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

# 노드 개수, 간선 개수(union 연산 개수) 입력
v, e = map(int, input().split())

# 부모 테이블
parent = [0] * (v + 1)

# 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

# 모든 간선 비용 리스트, 최종 비용 변수
edges = []
res = 0

# 간선 정보 입력
for _ in range(e):
    a, b, cost = map(int, input().split())
    # 비용순으로 오름차순 정렬하기 위해 튜플의 첫 원소를 비용으로 설정
    edges.append((cost, a, b))

# 간선을 비용순으로 정렬
edges.sort()

# 비용이 낮은 순서대로 간선 확인
for edge in edges:
    cost, a, b = edge
    # 사이클이 발생하지 않는 경우에만 같은 집합에 포함시키기
    #       사이클이 발생하지 않는 경우 : 두 노드의 루트 노드가 서로 다른 경우
    if find_parent(parent, a) != find_parent(parent, b):
        union_parent(parent, a, b)
        res += cost

print(res)