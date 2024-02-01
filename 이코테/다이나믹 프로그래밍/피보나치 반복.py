# DP 테이블 초기화
dp = [0] * 100

dp[1] = 1
dp[2] = 1
n = 99

# 피보나치 수열을 반복문으로 구현(바텀업 다이나믹 프로그래밍)
for i in range(3, n + 1):
    dp[i] = dp[i - 2] + dp[i - 1]

print(dp[n])
