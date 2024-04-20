# 논리 연산자
#       X and Y: X, Y가 모두 True일 때 True 리턴
#       X or Y: X 또는 Y가 True일 때 True 리턴
#       not X: X가 False일 때 True 리턴

# in 연산자, not in 연산자
#       리스트, 튜플, 문자열, 사전, 집합 자료형에 어떤 값이 존재하는지 확인하는 연산자
#       X in 리스트: 리스트에 X가 들어 있다면 True 리턴
#       X not in 문자열: 문자열에 X가 들어 있지 않다면 True 리턴

# if-else 문을 한 줄에 작성하기
score = 100
res = "Success" if score >= 90 else "Fail"
print(res)  # Success

# 리스트에서 특정 원소만 제거하기
a = [1, 2, 3, 4, 5, 5, 5]
rm_set = {3, 5}
res = [i for i in a if i not in rm_set]
print(res)  # [1, 2, 4]
