# 마을에는 N개의 집 + M개의 길 존재
#   길은 어느 방향으로든지 다닐 수 있음
#   길 유지비 존재
# 마을을 2개의 마을로 분리한다.
#   분리된 마을 안에 집들이 서로 연결되도록 분리해야 함
#   즉 분리된 마을 안에 있는 임의의 두 집 사이에 경로가 항상 존재해야 함
#   마을에는 집이 하나 이상 있어야 함
# 길 제거 조건
#   분리된 두 마을 사이에 있는 길 제거 가능
#   분리된 마을 안에서도 임의의 두 집 사이에 경로가 항상 존재하게 하면서 길 제거 가능
# 문제: 마을을 2개로 분리할 때 길 제거 조건을 만족하면서 길의 유지비 합이 최소가 되게 한다.
#       길 제거 + 길 유지비 최소화 -> 최소 신장 트리(크루스칼 알고리즘)
#       마을 2개로 분리 -> 최소 신장 트리를 2개로 분리(간선 중에서 최대 유지비 간선 제거)

def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

# 집 개수, 길 개수 입력
n, m = map(int, input().split())

# 부모 테이블 자기 자신으로 초기화
parent = [0] * (n + 1)
for i in range(1, n + 1):
    parent[i] = i

# 비용 테이블
edges = []

# 길 정보 입력
for _ in range(m):
    # 집 a -> 집 b의 길 유지비: c
    a, b, c = map(int, input().split())
    edges.append((c, a, b))  # (유지비, 집a, 집b)

# 유지비 순서대로 정렬
edges.sort()

# 유지비 총합, 최대 유지비
res = 0
max_cost = 0

# 낮은 비용 순서대로 확인
for edge in edges:
    cost, a, b = edge
    # 두 노드의 루트 노드가 다르면 합치기(사이클이 없으면 같은 집합에 넣기)
    if find_parent(parent, a) != find_parent(parent, b):
        union(parent, a, b)
        res += cost
        max_cost = cost

# 유지비 총합에서 최대 유지비를 빼기
print(res - max_cost)