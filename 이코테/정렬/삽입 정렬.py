arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(1, len(arr)):
    for j in range(i, 0, -1):  # i부터 1까지 1씩 감소하면서 반복
        if arr[j] < arr[j - 1]:  # 한 칸씩 왼쪽으로 이동
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
        else:  # 자기보다 작은 데이터를 만나면 멈춤
            break

print(arr)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]