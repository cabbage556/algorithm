# sorted() : 정렬된 결과를 리스트 자료형으로 반환
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
res = sorted(array)
print(res)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# sort() : 리스트 자체를 정렬
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
array.sort()
print(array)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 정렬 라이브러리에서 key 파라미터 사용하기
#       key 파라미터에 정렬 기준이 되는 함수 또는 람다 입력
array = [('바나나', 2), ('사과', 5), ('당근', 3)]

def setting(data):
    return data[1]

# key 파라미터에 함수 입력
res = sorted(array, key=setting)
print(res)  # [('바나나', 2), ('당근', 3), ('사과', 5)]

# key 파라미터에 람다 입력
res = sorted(array, key=lambda x: x[1])
print(res)