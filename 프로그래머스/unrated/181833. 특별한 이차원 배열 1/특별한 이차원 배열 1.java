class Solution {
    public int[][] solution(int n) {
        int[][] answer = new int[n][n];
        
        for (int i = 0; i < n; i++) {
            int[] temp = new int[n];
            for (int j = 0; j < n; j++) {
                if (i == j) {
                    temp[j] = 1;
                } else {
                    temp[j] = 0;
                }
            }
            answer[i] = temp;
        }
        
        return answer;
    }
}