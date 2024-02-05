# 서로소 집합 알고리즘
#       간선을 하나씩 확인한다.
#       두 노드 a, b의 루트 노드를 각각 찾는다.
#       두 노드의 루트 노드를 비교한다.
#           노드 a의 루트 노드가 노드 b의 루트 노드보다 작다면 노드 b의 루트 노드를 노드 a의 루트 노드로 바꾼다.
#           반대의 경우 반대로 바꾼다.
#       결과적으로 서로소 관계가 아닌 집합들로 나뉜다.

# 특정 원소가 속한 집합 찾기(경로 압축 기법)
def find_parent(parent, x):
    # 루트 노드가 아닌 경우 루트 노드를 찾을 때까지 재귀 호출
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


# 두 원소가 속한 집합 합치기
def union_parent(parent, a, b):
    a = find_parent(parent, a)  # 노드 a의 루트 노드 찾기
    b = find_parent(parent, b)  # 노드 b의 루트 노드 찾기

    # 노드 a의 루트 노드가 노드 b의 루트 노드보다 작은 경우
    #       노드 b의 루트 노드를 노드 a의 루트 노드로 변경
    if a < b:
        parent[b] = a
    # 노드 b의 루트 노드가 노드 a의 루트 노드보다 작은 경우
    #       노드 a의 루트 노드를 노드 b의 루트 노드로 변경
    else:
        parent[a] = b


# 노드 개수와 간선(union 연산) 개수 입력
v, e = map(int, input().split())

# 부모 테이블
#       각 노드의 부모 노드를 저장하는 테이블
parent = [0] * (v + 1)

# 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

# union 연산 수행
for _ in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

# 각 원소가 속한 집합 출력
print('각 원소가 속한 집합: ', end='')
for i in range(1, v + 1):
    print(find_parent(parent, i), end=' ')
print()

# 부모 테이블 출력
print('부모 테이블: ', end='')
for i in range(1, v + 1):
    print(parent[i], end=' ')
