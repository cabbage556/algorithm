class Solution {
    public String solution(String my_string) {
        String result = "";
        
        for (int i = my_string.length() - 1; i >= 0; i--) {
            result += Character.toString(my_string.charAt(i));
        }
        
        return result;
    }
}