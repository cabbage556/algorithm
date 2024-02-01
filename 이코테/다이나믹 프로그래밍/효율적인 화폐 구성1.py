n, m = map(int, input().split())
array = []
for _ in range(n):
    array.append(int(input()))

# DP 테이블 초기화: 인덱스를 '금액'으로, 값을 '금액'이 될 수 있는 최소값으로 저장
#       m의 최대값이 10000이므로 금액이 될 수 없음을 표현하기 위해 10001 사용
dp = [10001] * (m + 1)
dp[0] = 0  # 0원의 경우 화폐를 사용하지 않아도 됨

# 다이나믹 프로그래밍(바텀업)
for i in range(n):
    for j in range(array[i], m + 1, array[i]):
        dp[j] = min(dp[j], dp[j - array[i]] + 1)

if dp[m] == 10001:
    print(-1)
else:
    print(dp[m])
