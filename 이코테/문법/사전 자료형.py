# 사전 자료형
#       키, 값의 쌍을 데이터로 가지는 자료형
#       변경 불가능한 데이터를 키로 사용할 수 있음
#       내부적으로 '해시 테이블'을 사용하므로 데이터 검색 및 수정의 시간 복잡도는 O(1)임
#       키-값 쌍으로 구성된 데이터를 처리하는 것은 리스트보다 훨씬 빠르게 동작함

# 사전 자료형 초기화
data = dict()

# 사전 자료형 값 삽입
data['사과'] = 'apple'
data['바나나'] = 'banana'
data['코코넛'] = 'coconut'
print(data)  # {'사과': 'apple', '바나나': 'banana', '코코넛': 'coconut'}

# 사전 자료형 값 수정
data['사과'] = 'Apple'
print(data)  # {'사과': 'Apple', '바나나': 'banana', '코코넛': 'coconut'}

# 사전 자료형에 특정 원소가 있는지 검사 방법
#       리스트, 튜플 자료형에도 사용 가능한 검사 방법
if '사과' in data:
    print(True)  # 출력


# 사전 자료형 관련 함수
#       keys(): 키 데이터만 뽑아 리스트를 반환함
#       values(): 값 데이터만 뽑아 리스트를 반환함
data['사과'] = 'apple'
data['바나나'] = 'banana'
data['코코넛'] = 'coconut'
print(data.keys())  # dict_keys(['사과', '바나나', '코코넛'])
print(data.values())  # dict_values(['apple', 'banana', 'coconut'])

for k in data.keys():
    print(data[k])
