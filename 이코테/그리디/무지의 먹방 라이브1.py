import heapq


def solution(food_times, k):
    # k초 이내에 모두 먹을 수 있는 경우
    if sum(food_times) <= k:
        return -1

    # 우선순위 큐
    # (음식 시간, 음식 번호) 튜플 삽입
    #       음식 시간이 작은 순서대로 정렬됨
    q = []
    for i in range(len(food_times)):
        heapq.heappush(q, (food_times[i], i + 1))

    sum_val = 0  # 먹는 시간 합
    prev = 0     # 이전에 먹은 음식 시간
    food_len = len(food_times)  # 남은 음식 개수

    while sum_val + ((q[0][0] - prev) * food_len) <= k:
        now = heapq.heappop(q)[0]  # 현재 먹는 음식 시간
        # 먹는 시간 합 계산
        # 현재 먹는 음식 시간에서 이전에 먹은 음식 시간을 빼는 이유
        #       이전에 먹은 음식 시간만큼 현재 먹는 음식도 먹었기 때문
        sum_val += (now - prev) * food_len
        food_len -= 1  # 다 먹은 음식 제외
        prev = now     # 이전 음식 시간 설정

    # 음식 번호 순서대로 정렬 후 남은 시간에 해당하는 음식 번호 리턴
    res = sorted(q, key=lambda x: x[1])
    return res[(k - sum_val) % food_len][1]


print(solution([3, 1, 2], 5))
print(solution([8, 6, 4], 15))
