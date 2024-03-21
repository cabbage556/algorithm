# 이진 탐색 반복문2
def binary_search(arr, search_value):
    lower_bound = 0             # 상한선
    upper_bound = len(arr) - 1  # 하한선

    while lower_bound <= upper_bound:
        mid = (upper_bound + lower_bound) // 2  # 중간점
        val_at_mid = arr[mid]  # 중간점의 값

        if search_value == val_at_mid:
            return mid
        elif search_value < val_at_mid:
            upper_bound = mid - 1
        elif search_value > val_at_mid:
            lower_bound = mid + 1

    return None
