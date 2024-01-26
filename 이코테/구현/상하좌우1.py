n = int(input())
mvs = input().split()

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]
pos = [1, 1]
for mv in mvs:
    ny = 0
    nx = 0
    if mv == 'L':
        ny = pos[0] + dy[3]
        nx = pos[1] + dx[3]
    elif mv == 'R':
        ny = pos[0] + dy[1]
        nx = pos[1] + dx[1]
    elif mv == 'U':
        ny = pos[0] + dy[0]
        nx = pos[1] + dx[0]
    elif mv == 'D':
        ny = pos[0] + dy[2]
        nx = pos[1] + dx[2]

    if ny < 1 or ny > n or nx < 1 or nx > 5:
        continue

    pos[0] = ny
    pos[1] = nx

for p in pos:
    print(p, end=" ")
