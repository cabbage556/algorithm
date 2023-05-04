function solution(a, b, c, d) {
    const arr = [a, b, c, d].sort();
    
    // 네 주사위가 모두 같을 때
    if (arr[0] === arr[3]) {
        return 1111 * arr[0];
    }
    
    // 네 주사위가 모두 다를 때
    if (arr[0] < arr[1] && arr[1] < arr[2] && arr[2] < arr[3]) {
        return arr[0];
    }
    
    // 세 주사위가 같고 나머지 다른 주사위가 다를 때
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        return (10 * arr[0] + arr[3]) ** 2;
    } else if (arr[1] === arr[2] && arr[2] === arr[3]) {
        return (10 * arr[1] + arr[0]) ** 2;
    }
    
    // 주사위가 두 개씩 같은 값인 경우
    if (arr[0] === arr[1] && arr[2] === arr[3]) {
        return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
    }
    
    // 주사위가 두 개가 같고 나머지가 다른 경우
    if (arr[0] === arr[1]) {
        return arr[2] * arr[3];
    } else if (arr[1] === arr[2]) {
        return arr[0] * arr[3];
    } else if (arr[2] === arr[3]) {
        return arr[0] * arr[1];
    }
}