class Solution {
    public int[] solution(String my_string) {
        int[] result = new int[52];
        
        for (int i = 0; i < my_string.length(); i++) {
            int code = (int) my_string.charAt(i);
            if (code <= 90) {
                code -= 65;
            } else {
                code -= 71;
            }
            result[code]++;
        }
        
        return result;
    }
}