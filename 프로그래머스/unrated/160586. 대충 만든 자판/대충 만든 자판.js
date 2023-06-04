function solution(keymap, targets) {
    const targetCount = [];

    // 입력 문자열 읽기
    targets.forEach((target) => {
        const counts = [];

        // 입력 문자열의 문자 읽기
        for (let i = 0; i < target.length; i++) {
            const mapArr = [];

            // 키 입력 문자열 배열에서 입력할 문자의 인덱스 계산
            keymap.forEach((key) => mapArr.push(key.indexOf(target[i])));
            
            // 최소 회수를 구하기 위해 오름차순 정렬
            mapArr.sort((a, b) => a - b);

            for (let j = 0; j < mapArr.length; j++) {
                // 입력 문자열 배열에서 입력할 문자를 찾을 수 있는 경우에만 키 입력 회수 저장
                if (mapArr[j] !== -1) {
                    counts.push(mapArr[j] + 1);
                    break;
                }
            }
        }
        
        console.log(counts);
        // 키 입력 회수 저장 배열의 길이와 입력 문자열의 길이가 다르다면 입력할 수 없는 문자열이 포함된 경우
        if (counts.length !== target.length) {
            targetCount.push(-1);
        } else {
            targetCount.push(counts.reduce((acc, cur) => acc + cur, 0));
        }
    });

    return targetCount;
}