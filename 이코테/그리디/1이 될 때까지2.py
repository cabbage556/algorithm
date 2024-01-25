n, k = map(int, input().split())
ret = 0

# n이 k 이상이면 k로 계속 나누기
while n >= k:
    # n이 k로 나누어 떨어지지 않으면 n에서 1씩 빼기
    while n % k != 0:
        n -= 1
        ret += 1
    # k로 나누기
    n //= k
    ret += 1

# 남은 수에 대해 1씩 빼기
while n > 1:
    n -= 1
    ret += 1

print(ret)
