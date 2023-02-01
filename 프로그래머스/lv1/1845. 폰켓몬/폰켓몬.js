function solution(nums) {
    const selectCount = nums.length / 2;
    const typeCount = (new Set(nums)).size;
    
    console.log(selectCount, typeCount)
    
    if (selectCount < typeCount)
        return selectCount;
    else if (selectCount > typeCount)
        return typeCount;
    else
        return typeCount;
}