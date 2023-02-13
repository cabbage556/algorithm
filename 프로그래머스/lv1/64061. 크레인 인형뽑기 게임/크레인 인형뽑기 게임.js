function solution(board, moves) {
    const basket = [];
    let answer = 0;

    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
          const move = moves[i] - 1;
          if (board[j][move] !== 0) {
            basket.push(board[j][move]);
            board[j][move] = 0;
            break;
          }
        }

        if (basket.length >= 2) {
          const temp1 = basket.pop();
          const temp2 = basket.pop();

          if (temp1 === temp2) {
            answer += 2;
          } else {
            basket.push(temp2);
            basket.push(temp1);
          }
        }
    }

    return answer;
}