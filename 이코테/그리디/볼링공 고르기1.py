# 두 사람이 서로 무게가 다른 볼링공을 고르는 경우의 수 구하기

# 볼링공 개수, 공 최대 무게 입력
n, m = map(int, input().split())

# 각 볼링공의 무게 입력
balls = list(map(int, input().split()))

# 경우의 수
res = 0

# 사람 A
for i in range(n):
    # 사람 B
    for j in range(i + 1, n):
        a = balls[i]
        b = balls[j]

        # 두 사람이 선택한 공의 무게가 다르면 경우의 수 증가
        if a != b:
            res += 1

print(res)
