# 알파벳 대문자와 숫자로만 이루어진 문자열
#   모든 알파벳을 오름차순으로 정렬하여 출력하고, 그 뒤에 모든 숫자를 더한 값을 이어서 출력하기

s = input()

res1 = []
res2 = 0
for i in s:
    if ord(i) >= 65 and ord(i) <= 90:
        res1.append(i)
    else:
        res2 += int(i)

res1.sort()
for i in res1:
    print(i, end="")
print(res2)
