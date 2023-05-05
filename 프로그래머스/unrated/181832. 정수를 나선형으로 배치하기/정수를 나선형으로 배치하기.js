function solution(n) {
    const answer = [];
    let row = 0;
    let col = 0;
    let num = 1;
    let direction = 0;
    
    for (let i = 0; i < n; i++) {
        const temp = new Array(n).fill(0);
        answer.push(temp);
    }
    
    while (num <= n * n) {
        answer[row][col] = num;
        num++;
        
        if (direction === 0) { // 오른쪽으로 이동
            // 마지막 열까지 이동 또는 오른쪽에 있는 숫자가 0이 아닐 때까지 이동
            if (col === n - 1 || answer[row][col + 1] !== 0) {
                direction = 1;
                row++;
            } else {
                col++;
            }
        } else if (direction === 1) { // 아래로 이동
            // 마지막 행이거나 아래에 있는 숫자가 0이 아닐 때까지 이동
            if (row === n - 1 || answer[row + 1][col] !== 0) {
                direction = 2;
                col--;
            } else {
                row++;
            }
        } else if (direction === 2) { // 왼쪽으로 이동
            // 첫 번째 열까지 이동 또는 왼쪽에 있는 숫자가 0이 아닐 때까지 이동
            if (col === 0 || answer[row][col - 1] !== 0) {
                direction = 3;
                row--;
            } else {
                col--;
            }
        } else if (direction === 3) { // 위로 이동
            // 첫 번째 행까지 이동 또는 위에 있는 숫자가 0이 아닐 때까지 이동
            if (row === 0 || answer[row - 1][col] !== 0) {
                direction = 0;
                col++;
            } else {
                row--;
            }
        }
    }
    
    return answer;
}