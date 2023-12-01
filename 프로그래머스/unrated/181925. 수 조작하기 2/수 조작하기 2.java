class Solution {
    public String solution(int[] numLog) {
        String result = "";
        
        for (int i = 1; i < numLog.length; i++) {
            int diff = numLog[i] - numLog[i - 1];
            
            if (diff == 1) {
                result += "w";
            } else if (diff == -1) {
                result += "s";
            } else if (diff == 10) {
                result += "d";
            } else {
                result += "a";
            }
        }
        
        return result;
    }
}