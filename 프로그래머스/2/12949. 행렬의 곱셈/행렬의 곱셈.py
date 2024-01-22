def solution(arr1, arr2):
    # 곱셈 결과 행렬 생성
    #		(3 X 2) x (2 X 2) => (3 X 2)
    ret = [[0] * len(arr2[0]) for _ in range(len(arr1))]

    # arr1의 행의 길이만큼
    for i in range(len(arr1)):
        # arr2의 열의 길이만큼
        for j in range(len(arr2[0])):
            # arr1의 열의 길이만큼
            for k in range(len(arr1[0])):
                ret[i][j] += arr1[i][k] * arr2[k][j];
    
    # 곱셈 결과 행렬 리턴
    return ret