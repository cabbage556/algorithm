"""
만들 수 없는 금액
    동전 n개를 이용해서 만들 수 없는 양의 정수 금액 중 최솟값을 구하기
    n이 5이고 각 동전이 3, 2, 1, 1, 9 원일 때 만들 수 없는 양의 정수 금액 중 최솟값 : 8원
    n이 3이고 각 동전이 3, 5, 7 원일 때 만들 수 없는 양의 정수 금액 중 최솟값 : 1원
"""

# n : 동전 개수
# coins : 각 동전 단위
n = int(input())
coins = list(map(int, input().split()))

# target : 목표 금액
#   (목표 금액 - 1)까지의 모든 금액을 만들 수 있다는 의미
target = 1

# 작은 단위부터 확인하기 위해 오름차순 정렬
coins.sort()

# 작은 단위부터 순서대로 동전 확인
for coin in coins:
    # 현재 동전으로 목표 금액을 만들 수 없는 경우 반복 종료
    if target < coin:
        break

    # 현재 동전으로 목표 금액을 만들 수 있는 경우 목표 금액 업데이트
    target += coin

print(target)
