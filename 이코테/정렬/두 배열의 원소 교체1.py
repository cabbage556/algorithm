n, k = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

# a 오름차순 정렬, b 내림차순 정렬
a.sort()
b.sort(reverse=True)

# k번 교환
for i in range(k):
    if a[i] < b[i]:
        a[i], b[i] = b[i], a[i]

print(sum(a))