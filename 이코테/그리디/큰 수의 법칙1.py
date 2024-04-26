"""
큰 수의 법칙
    배열의 원소들을 M번 더해 최댓값을 만드는 법칙
    단, 특정 인덱스 값을 연속 K번 초과해 더할 수 없음
    단, 서로 다른 인덱스에 해당하는 수가 같은 경우에도 서로 다른 것으로 간주함
"""

# n : 배열의 크기
# m : 숫자가 더해지는 횟수
# k : 연속 덧셈 최대 횟수
n, m, k = map(int, input().split())

# 배열
nums = list(map(int, input().split()))
nums.sort()

first = nums[-1]  # 가장 큰 수
second = nums[-2]  # 두 번째로 큰 수
res = 0

while True:
    # 가장 큰 수 k번 더하기
    for _ in range(k):
        if m == 0:
            break
        res += first
        m -= 1

    if m == 0:
        break

    # 두 번째로 큰 수 1번 더하기
    res += second
    m -= 1

print(res)
