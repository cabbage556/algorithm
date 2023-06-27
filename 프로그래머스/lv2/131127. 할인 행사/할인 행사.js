function solution(want, number, discount) {
    // want: 원하는 제품을 나타내는 문자열 배열
    // number: 원하는 제품을 나타내는 정수 배열
    // discount: 할인 제품을 나타내는 문자열 배열
    // return: 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수
    let answer = 0;
    const shoppingList = {};
    
    want.forEach((v, i) => {
        shoppingList[v] = number[i];
    });
    
    
    for (let i = 0; i < discount.length - 9; i++) {
        const temp = {...shoppingList};
        let canBuyAllThings = true;
        
        for (let j = i; j < i + 10; j++) {
            const discountProduct = discount[j];
            
            if (!temp.hasOwnProperty(discountProduct)) {
                continue;
            }
            
            temp[discountProduct] -= 1;
        }
        
        for (const key in temp) {
            if (temp[key] !== 0) {
                canBuyAllThings = false;
                break;
            }
        }
        
        if (canBuyAllThings) {
            answer++;
        }
    }
    
    return answer;
}