import java.util.List;
import java.util.ArrayList;

class Solution {
    public String[] solution(String[] names) {
        List<String> result = new ArrayList<String>();
        
        for (int i = 0; i < names.length; i += 5) {
            result.add(names[i]);
        }
        
        return result.toArray(new String[0]);
    }
}