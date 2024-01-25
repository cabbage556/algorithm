n, m = map(int, input().split())

ret = 0
for _ in range(n):
    cards = list(map(int, input().split()))
    min_card = min(cards)
    ret = max(ret, min_card)

print(ret)
