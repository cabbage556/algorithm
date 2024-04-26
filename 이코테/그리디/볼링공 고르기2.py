"""
볼링공 고르기
    두 사람이 서로 무게가 다른 볼링공을 고르는 경우의 수를 구하기
"""

# n : 볼링공 갯수
# m : 공 최대 무게
# balls : 각 볼링공의 무게
n, m = map(int, input().split())
balls = list(map(int, input().split()))

# cnt : 각 볼링공 무게별 갯수(1 <= m <= 10)
cnt = [0] * 11
for ball in balls:
    cnt[ball] += 1  # 볼링공 무게를 인덱스로, 볼링공 갯수 증가

# res : 경우의 수
res = 0

# 볼링공 무게 : 1 ~ m
#   사람 A를 기준으로 무게가 낮은 볼링공부터 확인
for i in range(1, m + 1):
    nums = cnt[i]  # 사람 A가 선택한 무게에 해당하는 볼링공 갯수

    # 전체 볼링공 갯수에서 무게가 i인 볼링공 갯수만큼 제외한 값이 사람 B가 선택 가능한 갯수가 됨
    #       전체 갯수 = 전체 갯수 - A가 선택한 볼링공의 갯수(조합)
    n -= nums

    # 경우의 수 : 사람 A가 선택한 볼링공 갯수 x 사람 B가 선택 가능한 볼링공 갯수
    res += nums * n

print(res)
