class Solution {
    public String solution(String my_string, int m, int c) {
        String vertical = "";
        
        for (int i = c - 1; i < my_string.length(); i += m) {
            vertical += Character.toString(my_string.charAt(i));
        }
        
        return vertical;
    }
}