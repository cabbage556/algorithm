# 코테에서 자주 사용되는 주요 라이브러리의 문법과 유의할 점
#       파이썬의 일부 라이브러리는 잘못 사용하면 수행 시간이 증가하므로 잘 사용해야 함

# 표준 라이브러리
#       프로그래밍 언어에서 자주 사용되는 표준 소스코드를 미리 구현해 놓은 라이브러리
#       코테에서 대부분 표준 라이브러리를 사용할 수 있으므로 소스코드 작성량을 줄일 수 있음
#       파이썬으로 코테를 보면 파이썬 표준 라이브러리를 사용할 수 있음

# 코테에서 반드시 알아야 하는 라이브러리 6가지(각 라이브러리의 가장 핵심 내용만)
#       내장 함수
#           기본 입출력 기능, 정렬 기능 등을 포함하는 기본 내장 라이브러리
#           프로그램 작성 시 필수적인 기능을 포함하고 있음
#       itertools
#           반복되는 형태의 데이터를 처리하는 기능을 제공하는 라이브러리
#           '순열', '조합' 라이브러리를 제공함
#       heapq
#           힙(heap) 기능을 제공하는 라이브러리
#           우선순위 큐 기능을 구현할 때 사용함
#       bisect
#           이진 탐색 기능을 제공하는 라이브러리
#       collections
#           덱(deque), 카운터(Counter) 등의 유용한 자료구조를 포함하는 라이브러리
#       math
#           필수적인 수학 기능을 제공하는 라이브러리
#           팩토리얼, 제곱근, 최대공약수, 삼각함수 관련 함수 등을 포함하는 라이브러리


# 내장 함수
#       별도의 import문 없이 바로 사용 가능한 내장 함수를 의미함
#       sum() 함수: iterable(반복 가능한) 객체의 모든 원소의 합을 리턴함
#           반복 가능한 객체: 리스트, 사전, 튜플 자료형 등
res = sum([1, 2, 3, 4, 5])
print(res)  # 15

#       min() 함수: 2개 이상의 파라미터 중에서 가장 작은 값을 리턴함
res = min(7, 3, 5, 2)
print(res)  # 2

#       max() 함수: 2개 이상의 파라미터 중에서 가장 큰 값을 리턴함
res = max(7, 3, 5, 2)
print(res)  # 7

#       eval() 함수: 수학 수식이 문자열 형태로 들어오면 해당 수식을 계산한 결과를 리턴함
res = eval("(3 + 5) * 7")
print(res)  # 56

#       sorted(): iterable 객체의 오름차순 정렬 결과를 리턴함
#           key 파라미터: 정렬 기준 명시 가능
#           reverse 파라미터: 정렬 결과를 뒤집을지 여부 설정 가능
res = sorted([9, 1, 8, 5, 4])  # 오름차순 정렬
print(res)  # [1, 4, 5, 8, 9]

res = sorted([9, 1, 8, 5, 4], reverse=True)  # 내림차순 정렬
print(res)  # [9, 8, 5, 4, 1]

#       리스트의 원소로 리스트 또는 튜플이 존재할 때 특정 기준에 따라 정렬 수행 가능
#           key 파라미터로 정렬 기준을 명시함
# 튜플을 원소로 갖는 리스트를 내림차순 정렬, 정렬 기준: 원소의 인덱스1 값
res = sorted([('hong', 35), ('lee', 85), ('kim', 50)], key=lambda x: x[1], reverse=True)
print(res)  # [('lee', 85), ('kim', 50), ('hong', 35)]

# iterable 객체는 기본적으로 sort() 함수를 내장하므로 sorted() 함수를 사용하지 않아도 정렬 가능
#       iterable 객체의 sort() 함수는 리스트 객체의 내부 원소들이 바로 정렬됨
data = [9, 1, 8, 5, 4]
data.sort()
print(data)  # [1, 4, 5, 8, 9]


# itertools
#       반복 데이터를 처리하는 기능을 포함하는 라이브러리
#       유용한 클래스: permutations, combinations
# permutations 클래스
#       iterable 객체에서 r개의 데이터를 뽑아 일렬로 나열하는 순열을 계산함
#       객체 초기화 이후 리스트 자료형으로 변환하여 사용함
from itertools import permutations
data = ['A', 'B', 'C']
res = list(permutations(data, 3))  # data 리스트에서 3개를 뽑는 순열 리턴
print(res)  # [('A', 'B', 'C'), ('A', 'C', 'B'), ('B', 'A', 'C'), ('B', 'C', 'A'), ('C', 'A', 'B'), ('C', 'B', 'A')]

# product 클래스
#       iterable 객체에서 r개의 데이터를 뽑아 일렬로 나열하는 순열을 계산함
#       permutations와 달리 원소를 중복하여 뽑음
#       repeat 속성값에 뽑고자 하는 데이터 수를 넣어줌
#       객체 초기화 이후 리스트 자료형으로 변환하여 사용함
from itertools import product
data = ['A', 'B', 'C']
res = list(product(data, repeat=2))  # 2개를 뽑는 모든 순열 구하기(중복 허용)
print(res)  # [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'B'), ('B', 'C'), ('C', 'A'), ('C', 'B'), ('C', 'C')]

# combinations 클래스
#       itertable 객체에서 r개의 데이터를 뽑아 순서를 고려하지 않는 조합을 계산함
#       객체 초기화 이후 리스트 자료형으로 변환하여 사용함
from itertools import combinations
data = ['A', 'B', 'C']
res = list(combinations(data, 2))  # data 리스트에서 2개를 뽑는 조합 리턴
print(res)  # [('A', 'B'), ('A', 'C'), ('B', 'C')]

# combinations_with_replacement 클래스
#       iterable 객체에서 r개의 데이터를 뽑아 순서를 고려하지 않는 조합을 계산함
#       combinations와 달리 원소를 중복해서 뽑음
#       객체 초기화 이후 리스트 자료형으로 변환하여 사용함
from itertools import combinations_with_replacement
data = ['A', 'B', 'C']
res = list(combinations_with_replacement(data, 2))  # 2개를 뽑는 모든 조합 구하기(중복 허용)
print(res)  # [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]


# heapq
#       힙 기능을 제공하는 라이브러리
#       알고리즘에서 사용하는 우선순위 큐 기능을 구현할 때 heapq 사용
#       코테 환경에서 PriorityQueue 라이브러리보다 heapq가 더 빠르게 동작하므로 heapq를 사용하는 것이 좋음
import heapq

# 파이썬의 힙은 최소 힙으로 구성됨
#       원소를 힙에 넣었다가 빼는 것만으로도 시간 복잡도 O(NlogN)에 오름차순 정렬이 완료됨
#       보통 '최소 힙 자료구조'의 최상단 원소는 항상 '가장 작은' 원소이기 때문
# heapq.heappush(힙, 원소): 힙에 원소 삽입
# heapq.heappop(힙): 힙에서 원소 꺼내기

# 최소 힙 정렬: 오름차순 정렬
def min_heap_sort(iterable):
    h = []  # 힙으로 사용할 리스트
    res = []  # 정렬 결과를 담을 리스트
    for val in iterable:
        heapq.heappush(h, val)  # 모든 원소를 차례대로 힙에 삽입
    for i in range(len(h)):
        res.append(heapq.heappop(h))  # 힙에 삽입된 모든 원소를 차례대로 꺼내어 담기
    return res


res = min_heap_sort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])
print(res)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


# 파이썬은 최대 힙을 제공하지 않음
#       heapq 라이브러리로 최대 힙을 구현하는 경우, 원소의 부호를 임시로 변경하는 방식 사용
#       힙에 원소를 삽입하기 전 잠시 부호를 반대로 바꾸고, 힙에서 원소를 꺼낸 뒤 다시 원소의 부호를 바꾸기
# 최대 힙 정렬: 내림차순 정렬
def max_heap_sort(iterable):
    h = []
    res = []
    for val in iterable:
        heapq.heappush(h, -val)  # 삽입 시 부호 바꾸기
    for i in range(len(h)):
        res.append(-heapq.heappop(h))  # 꺼낼 때 부호 다시 바꾸기
    return res


res = max_heap_sort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])
print(res)  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


# bisect
#       이진 탐색을 쉽게 구현할 수 있는 라이브러리
#       '정렬된 배열'에서 특정 원소를 찾아야 할 때 효과적으로 사용 가능
#       bisect_left(), bisect_right() 함수를 주로 사용함
#       bisect_left(a, x)
#           정렬 순서를 유지하면서, 리스트 a에 데이터 x를 삽입할 가장 왼쪽 인덱스를 찾는 메서드
#           시간 복잡도: O(logN)
#       bisect_right(a, x)
#           정렬 순서를 유지하면서, 리스트 a에 데이터 x를 삽입할 가장 오른쪽 인덱스를 찾는 메서드
#           시간 복잡도: O(logN)
from bisect import bisect_left, bisect_right

a = [1, 2, 4, 4, 8]
x = 4
print(bisect_left(a, x))  # 2
print(bisect_right(a, x))  # 4

# bisect_left(), bisect_right() 함수를 효과적으로 사용하기
#       '정렬된 리스트'에서 '값이 특정 범위에 속하는 원소의 개수'를 구하기
# 값이 [left_val, right_val]인 데이터 개수 리턴
def count_by_range(a, left_val, right_val):
    right_i = bisect_right(a, right_val)
    left_i = bisect_left(a, left_val)
    return right_i - left_i


a = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9]
print(count_by_range(a, 4, 4))  # 2
print(count_by_range(a, -1, 3))  # 6


# collections
#       유용한 자료구조를 제공하는 라이브러리
#       코테에서 유용한 deque, Counter 클래스 제공

# deque 클래스
#       파이썬에선 Queue 대신 deque를 사용해 큐를 구현함
#       리스트와 deque의 원소 추가, 제거 시간 복잡도
#           리스트
#               가장 앞쪽에 원소 추가: O(N)
#               가장 뒤쪽에 원소 추가: O(1)
#               가장 앞쪽에서 원소 제거: O(N)
#               가장 뒤쪽에서 원소 제거: O(1)
#           deque
#               가장 앞쪽에 원소 추가: O(1)
#               가장 뒤쪽에 원소 추가: O(1)
#               가장 앞쪽에서 원소 제거: O(1)
#               가장 뒤쪽에서 원소 제거: O(1)
#       deque는 리스트와 달리 인덱싱, 슬라이싱 기능을 사용할 수 없음
#       다만 연속적으로 나열된 데이터의 시작 부분, 끝 부분에 데이터 삽입, 삭제가 매우 효과적임
#       스택 또는 큐의 기능을 모두 포함해서 스택 또는 큐 자료구조의 대용으로 사용 가능
#       deque 메서드
#           popleft(): 첫 번째 원소 제거
#           pop(): 마지막 원소 제거
#           appendleft(x): 첫 번째 인덱스에 x 삽입
#           append(x): 마지막 인덱스에 x 삽입
#       deque를 큐 자료구조로 사용하려면 append(), popleft()를 사용하면 됨
from collections import deque

data = deque([2, 3, 4])
data.append(5)
print(data)  # deque([2, 3, 4, 5])

data.popleft()
print(data)  # deque([3, 4, 5])
print(list(data))  # [3, 4, 5]

# Counter 클래스
#       Counter는 등장 횟수를 세는 기능을 제공함
#       iterable 객체 내부에서 원소가 몇 번 등장했는지를 알려줌
#       원소별 등장 횟수를 세는 기능이 필요할 때 짧은 소스코드로 구현 가능
from collections import Counter

cnt = Counter(['r', 'b', 'r', 'g', 'b', 'b'])
print(cnt)       # Counter({'b': 3, 'r': 2, 'g': 1})
print(cnt['r'])  # 2: 'r'이 등장한 횟수
print(cnt['g'])  # 1: 'g'가 등장한 횟수
print(cnt['b'])  # 3: 'b'가 등장한 횟수


# math
#       자주 사용하는 수학 기능을 제공하는 라이브러리
#       수학 계산이 필요한 문제에서 효과적으로 사용 가능
import math

print(math.factorial(5))  # 120: 5 팩토리얼 출력
print(math.sqrt(4))       # 2.0: 4의 제곱근 출력(소수형 데이터)
print(math.gcd(21, 14))   # 7: 21, 14의 최대 공약수 출력
print(math.pi)            # 파이 값 출력
print(math.e)             # 자연상수 값 출력
