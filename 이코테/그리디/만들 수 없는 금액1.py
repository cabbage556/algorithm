# N개의 동전을 이용해 만들 수 없는 양의 정수 금액 중 최소값을 구하기
# N=5이고 각 동전이 3, 2, 1, 1, 9원일 때 만들 수 없는 양의 정수 금액 중 최소값: 8

n = int(input())  # 동전 개수
coins = list(map(int, input().split()))  # 동전 단위

# 작은 단위부터 확인하기 위해 정렬
coins.sort()

# 목표 금액
target = 1

# 작은 순서대로 동전을 확인해 목표 금액을 만들 수 있는지 확인
for coin in coins:
    # 현재 동전으로 목표 금액을 만들 수 없는 경우 break
    if target < coin:
        break

    # 현재 동전으로 목표 금액을 만들 수 있는 경우 업데이트
    target += coin

print(target)
