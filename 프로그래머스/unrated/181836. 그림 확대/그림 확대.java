class Solution {
    public String[] solution(String[] picture, int k) {
        String[] result = new String[picture.length * k];
        
        for (int i = 0; i < picture.length; i++) {
            String str = picture[i];
            String enlarge = "";
            
            for (int j = 0; j < str.length(); j++) {
                enlarge += Character.toString(str.charAt(j)).repeat(k);
            }
            
            for (int l = 0; l < k; l++) {
                result[i * k + l] = enlarge;
            }
        }
        
        return result;
    }
}