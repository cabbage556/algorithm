# 문자열 입력
s = input()

cnt_0 = 0  # 연속 0의 개수
cnt_1 = 0  # 연속 1의 개수
before = s[0]  # 이전 값
for i in range(1, len(s)):
    n = s[i]  # 현재 값

    # 이전 값과 현재 값이 다르면 연속 0, 1의 개수 업데이트
    if before != n:
        before = n
        if n == '1':
            cnt_1 += 1
        else:
            cnt_0 += 1

# 나머지 경우 처리
if s[len(s) - 1] == '1':
    cnt_1 += 1
else:
    cnt_0 += 1

# 연속 0의 개수, 연속 1의 개수 중에서 작은 값만큼 뒤집으면 최소 횟수로 뒤집기 가능
print(min(cnt_0, cnt_1))
