function solution(keyinput, board) {
    const xy = [0, 0];
  const leftRightMax = Math.trunc(board[0] / 2);
  const upDownMax = Math.trunc(board[1] / 2);
  
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === 'left') {
      if (xy[0] === -leftRightMax) {
        xy[0] = -leftRightMax;
      } else {
        xy[0]--;
      }
    } else if (keyinput[i] === 'right') {
      if (xy[0] === leftRightMax) {
        xy[0] = leftRightMax;
      } else {
        xy[0]++;
      }
    } else if (keyinput[i] === 'up') {
      if (xy[1] === upDownMax) {
        xy[1] = upDownMax;
      } else {
        xy[1]++;
      }
    } else if (keyinput[i] === 'down') {
      if (xy[1] === -upDownMax) {
        xy[1] = -upDownMax;
      } else {
        xy[1]--;
      }
    }
  }
  
  return xy;
}