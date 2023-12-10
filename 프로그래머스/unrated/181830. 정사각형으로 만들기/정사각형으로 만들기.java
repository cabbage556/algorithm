class Solution {
    public int[][] solution(int[][] arr) {
        int rowCount = arr.length;
        int colCount = arr[0].length;
        
        if (rowCount == colCount) {
            return arr;
        }
        
        int[][] result;
        if (rowCount > colCount) {
            result = new int[rowCount][rowCount];
        } else {
            result = new int[colCount][colCount];
        }
        
        for (int i = 0; i < rowCount; i++) {
            for (int j = 0; j < colCount; j++) {
                result[i][j] = arr[i][j];
            }
        }
        return result;
    }
}