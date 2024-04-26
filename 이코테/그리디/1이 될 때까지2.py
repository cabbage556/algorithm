"""
n을 k로 최대한 많이 나누는 것이 최적의 해를 보장함
반복 과정
1. n이 k의 배수가 될 때까지 1씩 빼기
2. n을 k로 나누기
"""

n, k = map(int, input().split())
res = 0

# n이 k 이상이면 반복
while n >= k    :

    # n이 k의 배수가 될 때까지 1씩 빼기
    while n % k != 0:
        n -= 1
        res += 1

    # n을 k로 나누기
    n //= k
    res += 1

# 남은 수에 대해 1씩 빼기
while n > 1:
    n -= 1
    res += 1

print(res)
