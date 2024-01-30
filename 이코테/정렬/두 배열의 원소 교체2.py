n, k = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

# a 오름차순 정렬, b 내림차순 정렬
a.sort()
b.sort(reverse=True)

# 최대 k번 교환
for i in range(k):
    # a 원소가 b 원소보다 작을 때만 교환
    if a[i] < b[i]:
        a[i], b[i] = b[i], a[i]
    # a 원소가 b 원소보다 크거나 같으면 교환 중지
    else:
        break

print(sum(a))
