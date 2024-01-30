n = int(input())

arr = []
for _ in range(n):
    a, b = input().split()
    arr.append((a, int(b)))  # (이름, 성적) 튜플

arr.sort(key=lambda el: el[1])  # 성적 순으로 오름차순 정렬
for tp in arr:
    print(tp[0], end=' ')  # 이름 출력
