n, m, k = map(int, input().split())
nums = list(map(int, input().split()))

nums.sort()

# 가장 큰 수의 등장 횟수 = 반복 수열 등장 횟수 * k + m이 k+1로 나누어 떨어지지 않을 때의 나머지
cnt = int(m / (k + 1)) * k + m % (k + 1)

ret = nums[-1] * cnt
ret += nums[-2] * (m - cnt)
print(ret)
