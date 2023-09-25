/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  fill(image, sr, sc, color, image[sr][sc]);
  return image;
};

var fill = function (image, row, col, color, current) {
  // 현재 행과 열의 유효성 확인
  if (row < 0 || row >= image.length) return;
  if (col < 0 || col >= image[0].length) return;

  // 현재 픽셀이 이미 목표 색과 같은 경우 바로 종료
  if (image[row][col] === color) return;

  // 현재 픽셀이 시작 픽셀의 색과 다른 경우 바로 종료
  if (image[row][col] !== current) return;

  image[row][col] = color;

  fill(image, row - 1, col, color, current);
  fill(image, row + 1, col, color, current);
  fill(image, row, col - 1, color, current);
  fill(image, row, col + 1, color, current);
};
