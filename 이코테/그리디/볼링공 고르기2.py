# 두 사람이 서로 무게가 다른 볼링공을 고르는 경우의 수 구하기

# 볼링공 개수, 공 최대 무게 입력
n, m = map(int, input().split())

# 각 볼링공의 무게 입력
balls = list(map(int, input().split()))

# 각 볼링공 무게 별 개수(1 <= m <= 10)
cnt = [0] * 11
for ball in balls:
    cnt[ball] += 1

# 경우의 수
res = 0

# A는 1부터 m까지의 무게 선택
for i in range(1, m + 1):
    nums = cnt[i]  # A가 선택한 볼링공 개수

    # A가 선택한 볼링공 개수를 전체 개수에서 제외
    #   B가 선택 가능한 개수가 됨 -> 전체 개수 = 전체 개수 - A가 선택한 볼링공의 개수(조합)
    n -= nums

    # A가 볼링공 개수 x B가 선택 가능한 개수
    res += nums * n

print(res)
