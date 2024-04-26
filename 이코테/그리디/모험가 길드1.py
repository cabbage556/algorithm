"""
모험가 길드
    모험가 그룹 조건
        공포도가 x인 모험가는 x명 이상으로 구성된 모험가 그룹에 참여해야 함
    모험가 그룹의 최대 개수를 구하기
"""

# n : 모험가 수
# li : 모험가 공포도 배열
n = int(input())
li = list(map(int, input().split()))

# res : 모험가 그룹의 갯수
# cnt : 한 그룹에 포함되는 모험가 수
res = 0
cnt = 0

# 공포도 배열을 오름차순 정렬함
#   공포도가 낮은 순서대로 그룹에 넣어 그룹 수를 최대화함
li.sort()

for i in li:
    cnt += 1      # 그룹에 모험가 넣기
    if cnt >= i:  # 그룹의 모험가 수가 현재 공포도 이상인 경우
        res += 1  # 그룹 수 증가
        cnt = 0   # 모험가 수 초기화

print(res)
