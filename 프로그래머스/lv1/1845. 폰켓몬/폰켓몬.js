function solution(nums) {
//     const selectCount = nums.length / 2;     // 포켓몬 배열의 길이를 2로 나눈 결과
//     const typeCount = (new Set(nums)).size;  // 포멧몬 종류의 갯수
    
//     return selectCount < typeCount
//                             ? selectCount  // N/2 보다 포켓몬의 종류가 더 많은 경우
//                             : typeCount;   // N/2 보다 포켓몬의 종류가 더 작은 경우
    
    
//     const pokemon = {};
//     const maxSelectCount = nums.length / 2;
    
//     for (const element of nums)
//         pokemon[element] = 0;
    
//     const pokemonTypeCount = Object.keys(pokemon).length;  // 포켓몬 종류의 갯수
    
//     return pokemonTypeCount < maxSelectCount 
//                             ? pokemonTypeCount
//                             : maxSelectCount;
    
    // 수업 풀이
    const answer = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!answer.includes(nums[i]) && answer.length !== (nums.length / 2))
            answer.push(nums[i]);
    }
    // answer => [3, 1] / [3, 2, 4] / [3, 2]
    return answer.length;
    
}