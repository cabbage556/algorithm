function solution(board) {
    if (board.length === 1 && board[0].length === 1) {
        return board[0][0] === 1 ? 0 : 1;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                let row = i - 1 > 0 ? i - 1 : 0;
                let col = j - 1 > 0 ? j - 1 : 0;
                let rowSpace = row + 2;
                let colSpace = col + 2;
                
                // 첫 번째 열이나 마지막 열에 1이 있는 경우 
                if (j === 0 || j === board[i].length - 1) {
                    colSpace = col + 1;
                }
                
                // 첫 번째 행이나 마지막 행에 1이 있는 경우
                if (i === 0 || i === board.length - 1) {
                    rowSpace = row + 1;
                }
                
                for (let k = row; k <= rowSpace; k++) {
                    for (let l = col; l <= colSpace; l++) {
                        if (board[k][l] !== 1) {
                            board[k][l] = 2;
                        }
                    }
                }
            }
        }
    }
    
    let answer = 0;
    
    board.forEach(arr => {
        arr.forEach(el => {
            if (el === 0) {
                answer++;
            }
        });
    });
    
    return answer;
}