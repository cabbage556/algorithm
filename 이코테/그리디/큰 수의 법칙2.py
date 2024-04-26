# n : 배열의 크기
# m : 숫자가 더해지는 횟수
#   m의 크기가 100억 이상인 경우 수학적으로 해결할 수 있음
# k : 연속 덧셈 최대 횟수
n, m, k = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort()

first = nums[-1]
second = nums[-2]

# 가장 큰 수의 등장 횟수 = 반복 수열 길이 * k + m이 k+1로 나누어 떨어지지 않을 때의 나머지
cnt = int(m / (k + 1)) * k  # 가장 큰 수와 두 번째로 큰 수가 특정 수열 형태로 반복됨(가장 큰 수 k개 + 두 번째로 큰 수 1개)
cnt += m % (k + 1)  # m이 k+1로 나누어 떨어지지 않는 경우에는 가장 큰 수가 그 나머지만큼 등장함

res = cnt * first  # 가장 큰 수 더하기
res += (m - cnt) * second  # 두 번째로 큰 수 더하기

print(res)
