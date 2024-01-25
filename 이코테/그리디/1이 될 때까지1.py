n, k = map(int, input().split())
ret = 0

while True:
    if n % k == 0:
        n //= k
    else:
        n -= 1

    ret += 1
    if n == 1:
        break

print(ret)
