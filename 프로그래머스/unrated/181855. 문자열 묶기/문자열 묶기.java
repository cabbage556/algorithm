class Solution {
    public int solution(String[] strArr) {
        int[] strLength = new int[31];
        
        for (String str : strArr) {
            int length = str.length();
            strLength[length]++;
        }
        
        int max = -1;
        for (int length : strLength) {
            if (max < length) {
                max = length;
            }
        }
        
        
        return max;
    }
}