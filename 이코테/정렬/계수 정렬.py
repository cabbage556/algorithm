# 모든 원소의 값이 0보다 크거나 같다고 가정(계수 정렬 조건)
arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]

# 모든 범위를 포함하는 리스트 선언, 값은 0으로 초기화
cnt = [0] * (max(arr) + 1)

for i in range(len(arr)):
    cnt[arr[i]] += 1  # 각 데이터에 해당하는 인덱스의 원소 값 증가

for i in range(len(cnt)):  # 리스트에 기록된 정렬 정보 확인
    for _ in range(cnt[i]):  # 인덱스의 값만큼 인덱스 출력
        print(i, end=' ')
