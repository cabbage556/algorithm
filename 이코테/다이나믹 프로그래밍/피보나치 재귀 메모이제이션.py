# 메모이제이션 리스트
memo = [0] * 100

# 피보나치 함수(탑다운 다이나믹 프로그래밍)
def fibo(x):
    if x == 1 or x == 2:
        return 1
    # 이미 계산한 결과가 있으면 그대로 반환
    if memo[x] != 0:
        return memo[x]

    memo[x] = fibo(x - 1) + fibo(x - 2)
    return memo[x]

print(fibo(99))
