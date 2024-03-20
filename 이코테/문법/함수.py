# 함수 정의
def add(a, b):
    return a + b


# 함수 호출
print(add(3, 5))

# 함수 호출 시 파라미터에 직접 아규먼트 전달 가능
print(add(b=3, a=10))

# 함수 안에서 함수 밖에 있는 변수의 값을 변경하기
#       함수에서 global 키워드 사용
#       global 키워드 사용 시 해당 함수에서는 지역 변수를 만들지 않고, 함수 바깥에 선언된 변수를 참조함
a = 10

def func():
    global a  # func 함수 바깥에 선언된 변수 a 참조
    a += 1

func()
print(a)  # 11


# 람다 표현식
#       함수를 간단하게 작성하여 적용 가능
#       특정 기능을 수행하는 함수를 한 줄에 작성 가능
#       람다 표현식은 정렬 라이브러리 사용 시, 정렬 기준(Key)을 설정할 때 자주 사용됨
print((lambda a, b: a + b)(3, 5))  # 8
