# 문자열 자료형

# 문자열 초기화: 큰 따옴표 또는 작은 따옴표
#       큰 따옴표 내부에 작은 따옴표 포함 가능
#       작은 따옴표 내부에 큰 따옴표 포함 가능
#       \" 또는 \'를 사용해 큰 따옴표 또는 작은 따옴표를 문자열에 포함 가능
s = 'Hello World'
s = "Don't you know \"Python\"?"
print(s)  # Don't you know "Python"?


# 문자열 연산
#       문자열 변수에 덧셈을 사용하면 문자열이 연결됨
a = "Hello"
b = "World"
print(a + " " + b)  # Hello World

#       문자열 변수와 양의 정수를 곱하면 양의 정수의 값만큼 문자열이 더해짐
a = "String"
print(a * 3)  # StringStringString

#       파이썬 문자열은 내부적으로 리스트처럼 처리됨
#       문자열은 여러 개의 문자가 합쳐진 리스트라고 볼 수 있음
#       따라서 문자열 데이터에도 인덱싱, 슬라이싱을 사용할 수 있음
a = 'abcdef'
print(a[0])  # a
print(a[-1])  # f
print(a[0:3])  # abc
