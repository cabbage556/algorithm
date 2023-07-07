function solution(dirs) {
  let answer = 0;
  let x = 0;
  let y = 0;
  const routes = new Map();

  for (const dir of dirs) {
    let beforeX = x; // 이동 전 x좌표
    let beforeY = y; // 이동 전 y좌표

    // 범위 내에서 이동
    if (dir === "U" && y < 5) {
      y++; // 위로 한 칸
    } else if (dir === "D" && y > -5) {
      y--; // 아래로 한 칸
    } else if (dir === "R" && x < 5) {
      x++; // 오른쪽 한 칸
    } else if (dir === "L" && x > -5) {
      x--; // 왼쪽 한 칸
    }

    // 범위를 벗어나는 경우 무시
    if (beforeX === x && beforeY === y) {
      continue;
    }

    const routeToCheck = `(${beforeX}, ${beforeY})/(${x}, ${y})`;
    const reverseRouteToCheck = routeToCheck.split("/").reverse().join("/");

    // 이동 후 지나온 경로인지 확인
    if (!routes.get(routeToCheck)) {
      if (!routes.get(reverseRouteToCheck)) {
        answer++;
      }
      routes.set(routeToCheck, 1);
    }
  }
    
  return answer;
}