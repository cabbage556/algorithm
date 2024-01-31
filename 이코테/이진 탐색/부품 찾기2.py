n = int(input())
array = list(map(int, input().split()))
m = int(input())
reqs = list(map(int, input().split()))

# 계수 정렬
cnt = [0] * 1000001
for i in array:
    cnt[i] += 1

for target in reqs:
    if cnt[target] == 1:
        print('yes', end=' ')
    else:
        print('no', end=' ')
