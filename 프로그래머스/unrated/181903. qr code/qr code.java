class Solution {
    public String solution(int q, int r, String code) {
        String result = "";
        
        for (int i = r; i < code.length(); i += q) {
            result += Character.toString(code.charAt(i));
        }
        
        return result;
    }
}