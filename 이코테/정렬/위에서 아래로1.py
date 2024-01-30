n = int(input())

arr = []
for _ in range(n):
    arr.append(int(input()))

# 정렬 후 뒤집기
# arr.sort()
# arr.reverse()

# 내림차순 정렬
arr.sort(reverse=True)

for i in arr:
    print(i, end=' ')
