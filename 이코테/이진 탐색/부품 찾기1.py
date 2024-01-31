n = int(input())
array = list(map(int, input().split()))
m = int(input())
reqs = list(map(int, input().split()))

# 이진 탐색
def binary_search(array, target, start, end):
    while start <= end:
        mid = (start + end) // 2
        if array[mid] == target:
            return 'yes'
        elif array[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    return 'no'

# 이진 탐색 전 정렬
array.sort()

# 각 요청 부품에 대해 이진 탐색 수행
for target in reqs:
    print(binary_search(array, target, 0, n - 1), end=' ')
