function solution(park, routes) {
    let x;
    let y;
    const width = park[0].length;
    const height = park.length;
    
    // 시작 좌표 구하기
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                x = j;
                y = i;
                break;
            }
        }
        
        if (x !== undefined) {
            break;
        }
    }
    
    // 명령어 실행
    for (let i = 0; i < routes.length; i++) {
        let isXIncluded = false;
        let [op, n] = routes[i].split(' ');
        n = Number(n);
        
        // 공원을 벗어나거나 장애물이 존재하는 경우 명령 무시
        if (op === 'W') {
            if (x - n < 0) { // 공원을 벗어나는 경우
                continue;
            } else if (park[y].slice(x - n, x).includes('X')) { // 장애물이 존재하는 경우
                continue;
            } else {
                x -= n;
            }
        } else if (op === 'E') {
            if (x + n >= width) { // 공원을 벗어나는 경우
                continue;
            } else if (park[y].slice(x, x + n + 1).includes('X')) { // 장애물이 존재하는 경우
                continue;
            } else {
                x += n;
            }
        } else if (op === 'N') {
            if (y - n < 0) { // 공원을 벗어나는 경우
                continue;
            } else {
                for (let j = y - n; j < y; j++) {
                    if (park[j][x] === 'X') { // 장애물이 존재하는 경우
                        isXIncluded = true;
                        break;
                    }
                }
                
                if (!isXIncluded) {
                    y -= n;
                }
            }
        } else if (op === 'S') {
            if (y + n >= height) { // 공원을 벗어나는 경우
                continue;
            } else {
                for (let j = y; j <= y + n; j++) {
                    if (park[j][x] === 'X') { // 장애물이 존재하는 경우
                        isXIncluded = true;
                        break;
                    }
                }
                
                if (!isXIncluded) {
                    y += n;
                }
            }
        }
    }
    
    return [y, x];
}