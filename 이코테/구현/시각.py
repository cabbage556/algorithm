n = int(input())

# 00시 00분 00초 ~ N시 59분 59초 사이의 모든 시각 중에서 3이 하나라도 포함된 모든 경우의 수
cnt = 0
for i in range(n + 1):  # 0 ~ n시
    for j in range(60):  # 0 ~ 59분
        for k in range(60):  # 0 ~ 59초
            t = str(i) + str(j) + str(k)
            if '3' in t:
                cnt += 1

print(cnt)
