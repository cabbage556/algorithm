n, k = map(int, input().split())
ret = 0

# n이 100억 이상의 큰 수일 경우
#       n이 k의 배수가 되도록 한 번에 빼는 방식으로 작성
while True:
    # n이 k로 나눠지는 수가 될 때까지 1씩 빼기
    target = (n // k) * k  # n이 k로 나눠 떨어지는 수 중에서 가장 큰 수
    ret += (n - target)  # n에서 target을 빼면 n이 k로 나눠지는 수가 될 때까지 1씩 빼는 것과 같음
    n = target  # n이 k로 나눠지는 수가 됨

    # n이 k보다 작으면 나눌 수 없으므로 탈출
    if n < k:
        break

    n //= k
    ret += 1

# 마지막으로 남은 수에 대해 1씩 빼기
#       n이 3이라면 2(=3-1)번 빼야 1이 됨
ret += (n - 1)
print(ret)
