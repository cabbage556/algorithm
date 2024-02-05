# 특정 원소가 속한 집합 찾기
def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


# 두 원소가 속한 집합 합치기
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


# 노드 개수와 간선(union 연산) 개수 입력
v, e = map(int, input().split())
parent = [0] * (v + 1)  # 부모 테이블 초기화

# 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

cycle = False  # 사이클 여부

for i in range(e):
    a, b = map(int, input().split())
    # 두 노드의 루트 노드가 같다면 사이클이 있음
    if find_parent(parent, a) == find_parent(parent, b):
        cycle = True
        break
    # 사이클이 없는 경우 합집합 수행
    else:
        union_parent(parent, a, b)

if cycle:
    print('사이클 있음')
else:
    print('사이클 없음')