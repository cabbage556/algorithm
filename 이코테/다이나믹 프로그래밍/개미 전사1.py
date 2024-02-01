n = int(input())
array = list(map(int, input().split()))

dp = [0] * 101  # DP 테이블 초기화: 약탈 식량 최대값 저장

# 다이나믹 프로그래밍(바텀업)
dp[0] = array[0]
dp[1] = max(array[0], array[1])
for i in range(2, n):
    # i - 1번째 창고 약탈 -> i번째 창고 약탈 불가능
    # i - 2번째 창고 약탈 -> i번째 창고 약탈 가능
    dp[i] = max(dp[i - 1], dp[i - 2] + array[i])

print(dp[n - 1])
