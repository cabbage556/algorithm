# key: M x M (M: 3 ~ 20)
# lock: N x N (N: 3 ~ 20)
#		열쇠 회전, 이동 가능
#		열쇠의 돌기 부분이 자물쇠의 홈 부분에 딱 맞으면 자물쇠가 열림
#		열쇠의 돌기와 자물쇠의 돌기가 만나면 안됨
#		자물쇠의 모든 홈이 비어 있지 않아야 자물쇠가 열림
#		0: 홈 부분, 1: 돌기 부분

# 우측 90도 회전
def right_90(key):
    n, m = len(key), len(key[0])  # key: M x M
    key2 = [[0] * m for _ in range(n)]
    for i in range(m):
        for j in range(n):
            key2[i][j] = key[n - j - 1][i]
    return key2

# 자물쇠-열쇠 확인
def check(lock):
    length = len(lock) // 3
    for i in range(length, length * 2):
        for j in range(length, length * 2):
            if lock[i][j] != 1:
                return False
    return True

def solution(key, lock):
    n = len(lock)
    m = len(key)

    # 자물쇠 크기 3배 키우기
    lock2 = [[0] * (n * 3) for _ in range(n * 3)]
    for i in range(n):
        for j in range(n):
            lock2[i + n][j + n] = lock[i][j]

    # 시계 방향 90도 회전 4번 확인(90, 180, 270, 360)
    for _ in range(4):
        key = right_90(key)
        
        # 아래로 이동하면서 오른쪽으로 한 칸씩 확인
        for y in range(n * 2):
            for x in range(n * 2):
                # 자물쇠-열쇠 결합
                for i in range(m):
                    for j in range(m):
                        lock2[y + i][x + j] += key[i][j]
                if check(lock2):
                    return True

                # 자물쇠-열쇠 빼기
                for i in range(m):
                    for j in range(m):
                        lock2[y + i][x + j] -= key[i][j]

    return False
