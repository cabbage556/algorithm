function solution(people, limit) {
    // people: 사람들의 몸무게 배열
    // limit: 구명보트 무게 제한
    
    // 무거운 순서로 정렬
    people.sort((a, b) => b - a);
    
    let answer = 0;
    let lastPersonIndex = people.length - 1; // 현재 가장 가벼운 사람의 인덱스
    
    for (let i = 0; i < people.length; i++) {
        const currentLimit = limit - people[i];
        if (currentLimit - people[lastPersonIndex] >= 0) { // 보트에 현재 가장 가벼운 사람을 태울 수 있으면 태우기
            lastPersonIndex--;
        }
        answer++; // 구명보트 갯수 증가
        
        if (i >= lastPersonIndex) { // 더이상 태울 사람이 없다면 종료
            return answer;
        }
    }
    
    return answer;
}