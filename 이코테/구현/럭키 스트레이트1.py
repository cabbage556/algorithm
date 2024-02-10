# 럭키 스트레이트
#   점수가 n일 때 자릿수를 기준으로 점수 n을 반으로 나누어 왼쪽 부분의 각 자릿수의 합과 오른쪽 부분의 각 자릿수를 더한 값이 동일한 상황

n = input()

total1 = 0
for i in n[:len(n) // 2]:
    total1 += int(i)

total2 = 0
for i in n[len(n) // 2:]:
    total2 += int(i)

if total1 == total2:
    print("LUCKY")
else:
    print("READY")
