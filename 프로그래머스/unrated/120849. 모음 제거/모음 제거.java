import java.util.*;

class Solution {
    public String solution(String my_string) {
        String result = "";
        
        HashMap<Character, Boolean> map = new HashMap<>();
        map.put('a', true);
        map.put('e', true);
        map.put('i', true);
        map.put('o', true);
        map.put('u', true);
        
        for (int i = 0; i < my_string.length(); i++) {
            char ch = my_string.charAt(i);
            if (map.get(ch) == null) {
                result += Character.toString(ch);
            }
        }
        
        return result;
    }
}