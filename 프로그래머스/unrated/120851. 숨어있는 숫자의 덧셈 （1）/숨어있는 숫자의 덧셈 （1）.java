class Solution {
    public int solution(String my_string) {
        int result = 0;
        
        for (int i = 0; i < my_string.length(); i++) {
            int codePoint = my_string.codePointAt(i);
            if (codePoint >= 49 && codePoint <= 57) {
                result += (codePoint - 48);
            }
        }
        
        return result;
    }
}