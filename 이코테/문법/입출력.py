# 입출력

# input()
#       데이터 입력 시 사용하는 함수
#       한 줄의 문자열을 입력 받음
#       입력 받은 데이터를 정수형 데이터로 처리하려면 문자열을 정수로 바꾸는 int() 함수 사용

# 여러 개의 데이터를 입력 받는 경우, 데이터가 공백으로 구분되는 경우가 많음
#       입력받은 문자열을 띄어쓰기로 구분해 각각 정수 자료형 데이터로 만들어 리스트에 저장하기
#           list(map(int, input().split()))

# 데이터 개수 입력
n = int(input())

# 각 데이터를 공백으로 구분하여 입력, 각 데이터를 정수형 데이터로 만들어 리스트에 저장
data = list(map(int, input().split()))
data.sort(reverse=True)
print(data)

# 공백으로 구분된 데이터의 개수가 많지 않은 경우
#       단순하게 map(int, input().split()) 사용 가능
# n, m, k를 공백으로 구분하여 입력
n, m, k = map(int, input().split())
print(n, m, k)

# 입력을 최대한 빠르게 받기
#       input() 함수의 동작 속도가 느려 입력 데이터 개수가 많으면 시간 초과가 발생할 수 있음
#       이런 경우 sys 라이브러리의 sys.stdin.readline() 사용
#       한 줄 입력 받고, rstrip() 함수를 사용해 줄 바꿈 기호를 제거해야 함
import sys
data = sys.stdin.readline().rstrip()  # 문자열 입력 받기
print(data)


# print()
#       데이터 출력 시 사용
#       콤마로 구분하여 넣은 아규먼트가 띄어쓰기로 구분되어 출력됨
a = 1
b = 2
print(a, b)  # 1 2

#       print()는 기본적으로 출력 이후 줄 바꿈 수행
#       print()를 호출할 때마다 줄이 변경됨
a = 1
b = 2
print(a)  # 1
print(b)  # 2

#       문자열과 수를 함께 출력하는 경우
#           str() 함수를 사용해 수를 문자열로 변경하고 더해야 함
#           또는 각 자료형을 콤마로 구분하여 출력해야 함
#               콤마로 구분하는 경우 값 사이에 공백이 삽입되는 점에 주의하기
#           단순하게 더하기 연산자를 사용해 문자열과 수를 더하면 에러가 발생하기 때문
ans = 10
print("정답은 " + str(ans) + "입니다.")
print("정답은", ans, "입니다.")


# f-string 문법(Python 3.6 이상)
#       문자열 앞에 접두사 f를 붙여서 사용함
#       중괄호 안에 변수를 넣어 자료형 변환 없이 간단하게 문자열과 정수를 함께 넣을 수 있음
ans = 10
print(f"정답은 {ans}입니다.")