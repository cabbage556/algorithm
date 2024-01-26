n = int(input())
plans = input().split()

x, y = 1, 1
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
mvs = ['L', 'R', 'U', 'D']

for plan in plans:
    for i in range(len(mvs)):
        if plan == mvs[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    if nx < 1 or nx > 5 or ny < 1 or ny > n:
        continue
    x, y = nx, ny

print(y, x)