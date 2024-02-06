# N명의 학생, 0번부터 N번까지 번호를 가짐
# 처음에 모든 학생이 서로 다른 팀으로 구분되어, N + 1개의 팀이 존재
# 두 가지 연산
#   팀 합치기 : 두 팀을 합치는 연산
#       입력 값: 0
#   같은 팀 여부 확인 : 특정 두 학생이 같은 팀에 속하는지 확인하는 연산
#       입력 값: 1

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

n, m = map(int, input().split())

# 부모 테이블, 자기 자신의 값으로 초기화
parent = [0] * (n + 1)
for i in range(1, n + 1):
    parent[i] = i

# 연산 입력
for _ in range(m):
    op, a, b = map(int, input().split())
    # 연산이 같은 팀 여부 확인인 경우 두 학생의 팀을 확인함
    if op == 1:
        if find_parent(parent, a) == find_parent(parent, b):
            print('YES')
        else:
            print('NO')
    # 연산이 팀 합치기인 경우 두 학생의 팀을 합침
    else:
        union(parent, a, b)
