class Solution {
    public int solution(int[] sides) {
        int max = 0;
        for (int i = 1; i < sides.length; i++) {
            if (sides[max] < sides[i]) max = i;
        }
        
        int restSum = 0;
        for (int i = 0; i < sides.length; i++) {
            if (i != max) {
                restSum += sides[i];
            }
        }
        
        return sides[max] < restSum ? 1 : 2;
    }
}