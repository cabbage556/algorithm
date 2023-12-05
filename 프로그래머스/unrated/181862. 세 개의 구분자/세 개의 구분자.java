import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

class Solution {
    public String[] solution(String myStr) {
        String[] abc = {"a", "b", "c"};
        List<String> separators = new ArrayList<>(Arrays.asList(abc));
        List<String> result = new ArrayList<>();
        String split = "";
        
        for (int i = 0; i < myStr.length(); i++) {
            char ch = myStr.charAt(i);
            boolean equalsToAbc = ch == 'a' || ch == 'b' || ch == 'c';
            
            if (equalsToAbc) {
                if (split.length() > 0) {
                    result.add(split);
                }
                
                split = "";
            } else {
                split += ch;
            }
        }
        
        result.add(split);
        
        if (result.size() == 1 && result.get(0).equals("")) {
            return new String[]{"EMPTY"};
        }
        
        return result.toArray(new String[result.size()]);
    }
}