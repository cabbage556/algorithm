import java.util.List;
import java.util.ArrayList;

class Solution {
    public int solution(String myString, String pat) {
        List<String> result = new ArrayList<>();
        
        for (int i = 0; i < myString.length() - pat.length() + 1; i++) {
            result.add(myString.substring(i, pat.length() + i));
        }
        
        return result.stream().filter(sub -> sub.equals(pat)).toArray().length;
    }
}