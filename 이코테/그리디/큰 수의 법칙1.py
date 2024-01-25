n, m, k = map(int, input().split())
nums = list(map(int, input().split()))

nums.sort()
ret = 0
while True:
    for _ in range(k):
        if m == 0:
            break
        ret += nums[-1]
        m -= 1

    if m == 0:
        break
    ret += nums[-2]
    m -= 1

print(ret)
