function solution(dots) {
    let [width, height] = [0, 0];
  
  for (let i = 1; i < dots.length; i++) {
    if (dots[0][1] === dots[i][1]) { // y좌표가 같은 꼭짓점
      width = dots[0][0] - dots[i][0];
    } else if (dots[0][0] === dots[i][0]) { // x좌표가 같은 꼭짓점
      height = dots[0][1] - dots[i][1];
    }
  }
  
  return Math.abs(width * height);
}