def solution(n, lost, reserve):
    # 전체 학생의 여벌 체육복 개수 배열
    cnt = [0] * 32
    
    _lost = set(lost) - set(reserve)
    _reserve = set(reserve) - set(lost)

    # reserve 순회
    # 순회 값을 인덱스로 여벌 체육복 개수 배열의 값을 1로 업데이트
    for i in _reserve:
        cnt[i] = 1
    
    # lost 순회
    # 순회 값을 인덱스로 여벌 체육복 개수 배열에서 양옆 인덱스에 체육복 개수 확인
    # 양옆 인덱스 중에서 체육복 개수가 1이 있을 경우 체육복 개수를 0으로 만들기
    # 양옆 인덱스의 체육복 개수가 모두 0인 경우 전체 학생 수에서 1 빼기
    for i in _lost:
        before, after = cnt[i - 1], cnt[i + 1]
        if before == 1:
            cnt[i - 1] = 0
        elif after == 1:
            cnt[i + 1] = 0
        else:
            n -= 1

    return n
