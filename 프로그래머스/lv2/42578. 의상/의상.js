function solution(clothes) {
    // [의상 이름, 의상 종류]
    const clothesObj = {};
    let answer = 1;
    
    for (let i = 0; i < clothes.length; i++) {
        const [name, type] = clothes[i];
        clothesObj[type] = clothesObj[type] ?? [];
        clothesObj[type].push(name);
    }
    
    for (const type in clothesObj) {
        answer *= (clothesObj[type].length + 1);
    }
    
    return answer - 1;
}