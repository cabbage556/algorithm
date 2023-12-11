class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String result = "";
        
        int overwriteIndex = 0;
        for (int i = 0; i < my_string.length(); i++) {
            if (i >= s && i < s + overwrite_string.length()) {
                result += overwrite_string.charAt(overwriteIndex++);
            } else {
                result += my_string.charAt(i);
            }
        }
        
        return result;
    }
}