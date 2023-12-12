class Solution {
    public int solution(int[] array, int n) {
        int result = 0;
        
        for (int num : array) {
            if (n == num) result++;
        }
        
        return result;
    }
}