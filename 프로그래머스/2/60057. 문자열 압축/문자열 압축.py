def solution(s):
    res = len(s)
    
    # 자르기 단위
    for i in range(1, len(s) // 2 + 1):
        s2 = ''
        pre = s[0:i]  # 이전 문자열
        cnt = 1
        
        # 문자열 자르기
        for j in range(i, len(s), i):
            cur = s[j:j+i]
            
            # 이전 문자열과 다른 경우
            if pre != cur:
                if cnt >= 2:
                    s2 += str(cnt) + pre
                else:
                    s2 += pre
                pre = s[j:j+i]
                cnt = 1
            # 이전 문자열과 같은 경우
            else:
                cnt += 1
        
        # 마지막으로 자른 문자열 처리
        if cnt >= 2:
            s2 += str(cnt) + pre
        else:
            s2 += pre
        
        # 길이 업데이트
        res = min(res, len(s2))
    
    return res