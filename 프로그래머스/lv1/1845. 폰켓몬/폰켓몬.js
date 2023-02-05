function solution(nums) {
    const selectCount = nums.length / 2;     // 포켓몬 배열의 길이를 2로 나누기
    const typeCount = (new Set(nums)).size;  // 포멧몬 배열에서 종류의 갯수를 얻기
    
    // console.log(selectCount, typeCount);
    
    // N/2 보다 포켓몬의 종류가 더 큰 경우
    if (selectCount < typeCount)
        return selectCount;
    // N/2 보다 포켓몬의 종류가 더 작은 경우
    else
        return typeCount;
}