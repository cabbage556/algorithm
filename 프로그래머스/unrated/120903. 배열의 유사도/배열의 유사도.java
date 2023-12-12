import java.util.*;

class Solution {
    public int solution(String[] s1, String[] s2) {
        int result = 0;
        HashMap<String, Boolean> map = new HashMap<>();
        
        for (String str : s1) {
            map.put(str, true);
        }
        
        for (String str : s2) {
            if (map.get(str) != null) {
                result++;
            }
        }
        
        return result;
    }
}