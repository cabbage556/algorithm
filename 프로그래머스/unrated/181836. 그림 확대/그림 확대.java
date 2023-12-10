import java.util.*;

class Solution {
    public String[] solution(String[] picture, int k) {
        List<String> result = new ArrayList<>();
        
        for (String str : picture) {
            String enlarge = "";
            
            for (int i = 0; i < str.length(); i++) {
                enlarge += Character.toString(str.charAt(i)).repeat(k);
            }
            
            for (int i = 0; i < k; i++) {
                result.add(enlarge);
            }
        }
        
        return result.toArray(new String[result.size()]);
    }
}