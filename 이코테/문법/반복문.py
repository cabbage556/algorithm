# while문
#       조건문이 True이면 코드 반복 실행
i = 1
res = 0
while i <= 9:
    res += i
    i += 1
print(res)  # 45


# for-in
#       in 뒤에 오는 데이터에 포함된 모든 원소를 첫 번째 인덱스부터 차례대로 하나씩 방문
#       in 뒤에 오는 데이터: 리스트, 튜플, 문자열 등
res = 0
for i in range(1, 10):  # 1부터 9까지 반복
    res += i
print(res)

scores = [90, 95, 66, 54, 91]
for i in range(5):
    if scores[i] >= 90:
        print(i + 1, '번 학생 합격')