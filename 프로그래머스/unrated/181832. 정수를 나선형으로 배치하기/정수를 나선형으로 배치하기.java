class Solution {
    public int[][] solution(int n) {
        int[][] result = new int[n][n];
        int direction = 0;
        int row = 0, col = 0;
        int num = 1;
        
        while (num <= n * n) {
            result[row][col] = num++;
            
            // 오른쪽 방향
            if (direction == 0) {
                // 마지막 열까지 이동 또는 마지막 열이 0이 아닐 때까지 이동
                if (col == n - 1 || result[row][col + 1] != 0) {
                    direction = 1;
                    row++;
                } else {
                    col++; // 오른쪽
                }
            }
            // 아래 방향
            else if (direction == 1) {
                // 마지막 행까지 이동 또는 마지막 행이 0이 아닐 때까지 이동
                if (row == n - 1 || result[row + 1][col] != 0) {
                    direction = 2;
                    col--;
                } else {
                    row++; // 아래
                }
            }
            // 왼쪽 방향
            else if (direction == 2) {
                // 첫 번째 열까지 이동 또는 왼쪽 숫자가 0이 아닐 때까지 이동
                if (col == 0 || result[row][col - 1] != 0) {
                    direction = 3;
                    row--;
                } else {
                    col--; // 왼쪽
                }
            }
            // 위 방향
            else if (direction == 3) {
                // 첫 번째 행까지 이동 또는 위 숫자가 0이 아닐 때까지 이동
                if (row == 0 || result[row - 1][col] != 0) {
                    direction = 0;
                    col++;
                } else {
                    row--; // 위
                }
            }
        }
        
        return result;
    }
}