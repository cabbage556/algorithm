n, m = map(int, input().split())
x, y, d = map(int, input().split())

visited = [[0] * m for _ in range(n)]  # 방문 체크
visited[y][x] = 1  # 현재 위치 방문 체크

mp = []  # 전체 지도
for _ in range(n):
    mp.append(list(map(int, input().split())))

# 북동남서(상우하좌)
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]
cnt = 1
turns = 0
while True:
    # 왼쪽 회전
    d -= 1
    if d == -1:
        d = 3
    ny = y + dy[d]  # 회전 후 다음 y 좌표
    nx = x + dx[d]  # 회전 후 다음 x 좌표
    if ny < 0 or ny >= n or nx < 0 or nx >= m:  # 이동할 수 없는 경우 다음 반복
        continue

    # 방문하지 않고 땅인 경우 방문
    if visited[ny][nx] == 0 and mp[ny][nx] == 0:
        visited[ny][nx] = 1
        y, x = ny, nx
        cnt += 1
        turns = 0
        continue
    # 방문하거나 바다인 경우
    else:
        turns += 1

    # 네 방향 모두 가지 못하는 경우 뒤로 이동
    if turns == 4:
        ny = y - dy[d]
        nx = x - dx[d]
        if mp[ny][nx] == 0:  # 뒤가 땅이면 이동
            y, x = ny, nx
        else:  # 뒤가 바다면 종료
            break
        turns = 0

print(cnt)
