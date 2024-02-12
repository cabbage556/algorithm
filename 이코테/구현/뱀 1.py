# 뱀 게임
#   게임은 N x N 정사각 보드 위에서 진행, 보드 상하좌우 끝에 벽이 존재
#   게임 시작 시 뱀의 위치: 맨 위 맨 좌측
#   게임 시작 시 뱀의 길이: 1
#   게임 시작 시 뱀의 방향: 오른쪽
# 게임 규칙
#   뱀이 벽 또는 자기 자신의 몸과 부딪히면 게임 종료
#   뱀은 매 초마다 이동
#   뱀은 몸길이를 늘려 머리를 다음 칸에 위치시킴
#   만약 이동한 칸에 사과가 있으면 칸에 있던 사과가 없어지고 꼬리는 움직이지 않음
#   만약 이동한 칸에 사과가 없다면 몸길이를 줄여 꼬리가 위치한 칸을 비워줌(몸길이가 변하지 않는 것)
# 게임이 몇 초에 끝나는지 계산하기

# 보드 크기, 사과 개수 입력
n = int(input())
k = int(input())

# 보드
bd = [[0] * (n + 1) for _ in range(n + 1)]

# 사과 위치 입력
for _ in range(k):
    y, x = map(int, input().split())
    bd[y][x] = 1  # 보드에 사과 위치 저장


# 방향 변환 정보: (초, 방향)
dis = [0] * 10001

# 방향 변환 횟수, 정보 입력
l = int(input())
for _ in range(l):
    # x초가 끝나고 c 방향으로 90도 회전
    #   c: L(왼쪽) / D(오른쪽)
    x, c = input().split()
    dis[int(x)] = c

# 동남서북(첫 방향은 동쪽)
dy = [0, 1, 0, -1]
dx = [1, 0, -1, 0]

# 방향 계산 함수
def get_dir(di, c):
    if c == 'L':
        di = (di - 1) % 4
    else:
        di = (di + 1) % 4
    return di

# 게임 종료 조건 확인 함수
def check(y, x):
    # 뱀이 벽에 닿거나 자신의 몸에 닿는 경우
    if y < 1 or y > n or x < 1 or x > n or bd[y][x] == 2:
        return True
    return False

# 게임
hy, hx = 1, 1   # 머리 위치
bd[hy][hx] = 2  # 보드에서 뱀이 위치한 곳을 2로 표시
di = 0          # 방향: 동, 남, 서, 북
t = 0           # 게임 시간
idx = 0         # 다음 회전 정보
q = [(hy, hx)]  # 뱀이 차지하고 있는 위치 정보(맨 앞이 꼬리 위치)

while True:
    # 다음 머리 위치
    ny = hy + dy[di]
    nx = hx + dx[di]

    # 게임 종료 조건에 해당하면 게임 종료
    if check(ny, nx):
        t += 1
        break

    # 사과가 있으면 이동
    if bd[ny][nx] == 1:
        bd[ny][nx] = 2
        q.append((ny, nx))
    # 사과가 없으면 이동 후 꼬리 없애기
    elif bd[ny][nx] == 0:
        # 이동
        bd[ny][nx] = 2
        q.append((ny, nx))

        # 꼬리 없애기
        ty, tx = q.pop(0)
        bd[ty][tx] = 0

    # 머리 위치, 게임 시간 업데이트
    hy, hx = ny, nx
    t += 1

    # 회전할 시간인 경우 회전
    if dis[t] != 0:
        di = get_dir(di, dis[t])

print(t)