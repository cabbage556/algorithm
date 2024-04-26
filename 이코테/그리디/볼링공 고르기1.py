"""
볼링공 고르기
    두 사람이 서로 무게가 다른 볼링공을 고르는 경우의 수를 구하기
"""

# n : 볼링공 개수
# m : 공 최대 무게
# balls : 각 볼링공의 무게
n, m = map(int, input().split())
balls = list(map(int, input().split()))

# res : 경우의 수
res = 0

for i in range(n):
    for j in range(i + 1, n):
        a = balls[i]  # 사람 A가 선택한 볼링공의 무게
        b = balls[j]  # 사람 B가 선택한 볼링공의 무게

        # 두 사람이 선택한 공의 무게가 다르면 경우의 수 증가
        if a != b:
            res += 1

print(res)
