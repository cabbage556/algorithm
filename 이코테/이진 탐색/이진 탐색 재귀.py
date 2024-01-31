# 이진 탐색 재귀
def binary_search(array, target, start, end):
    if start > end:
        return None

    mid = (start + end) // 2  # 중간점

    if array[mid] == target:   # 찾는 경우 중간점 반환
        return mid
    elif array[mid] > target:  # 중간점의 값보다 찾을 값이 작은 경우 중간점 왼쪽 확인
        return binary_search(array, target, start, mid - 1)
    else:                      # 중간점의 값보다 찾을 값이 큰 경우 중간점 오른쪽 확인
        return binary_search(array, target, mid + 1, end)

# n: 원소의 개수, target: 찾을 값
n, target = map(int, input().split())

# 전체 리스트
array = list(map(int, input().split()))

# 이진 탐색
res = binary_search(array, target, 0, n - 1)
if res == None:
    print(f'{target}이 리스트에 존재하지 않음')
else:
    print(res + 1)