n = int(input())
st = set(map(int, input().split()))
m = int(input())
reqs = list(map(int, input().split()))

# 각 요청 부품에 대해
for target in reqs:
    # 집합에서 특정 요청 부품 존재 여부 확인
    if target in st:
        print('yes', end=' ')
    else:
        print('no', end=' ')
