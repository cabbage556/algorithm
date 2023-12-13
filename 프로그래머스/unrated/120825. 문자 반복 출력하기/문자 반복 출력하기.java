class Solution {
    public String solution(String my_string, int n) {
        String result = "";
        for (int i = 0; i < my_string.length(); i++) {
            result += (my_string.charAt(i) + "").repeat(n);
        }
        
        return result;
    }
}