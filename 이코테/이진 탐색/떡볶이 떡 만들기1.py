n, m = map(int, input().split())  # n: 떡의 개수, m: 요청한 떡의 길이
array = list(map(int, input().split()))  # 떡의 개별 길이

# n: 1 ~ 1,000,000
# 절단기 높이: 1 ~ 1,000,000,000
#       모든 절단기의 높이를 순차 탐색하는 경우 시간 초과
#       모든 절단기의 높이를 이진 탐색하는 경우 최대 31번 탐색
# n이 최대 100만이므로 최대 3000만 번 연산 필요(이진 탐색 31번 * 100만)
#       시간 제한이 2초이므로 최악의 경우 3000만 번 연산을 진행하는 경우 아슬아슬하게 시간 초과 없이 정답 판정 가능

start = 0         # 절단기 높이 시작점
end = max(array)  # 절단기 높이 끝점
res = 0
while start <= end:
    mid = (start + end) // 2  # 절단기 높이 중간점
    total = 0  # 절단 후 떡의 길이 총합

    # 중간점에 대해 자른 떡의 길이 총합 계산
    for l in array:
        if l > mid:
            total += (l - mid)

    # 떡이 부족한 경우 절단기 높이 낮추기(왼쪽 탐색)
    if total < m:
        end = mid - 1
    # 떡이 충분한 경우 절단기 높이 높이기(오른쪽 탐색)
    else:
        start = mid + 1
        res = mid  # 절단기의 최대 높이를 구하므로 계속 업데이트

print(res)
