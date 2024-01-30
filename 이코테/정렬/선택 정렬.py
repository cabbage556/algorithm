arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

# 선택 정렬
for i in range(len(arr)):
    min_idx = i  # 가장 작은 원소의 인덱스
    for j in range(i + 1, len(arr)):
        if arr[min_idx] > arr[j]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]  # 스왑

print(arr)

# 파이썬 스왑
arr = [3, 5]
arr[0], arr[1] = arr[1], arr[0]

print(arr)
