import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(String[] intStrs, int k, int s, int l) {
        List<Integer> result = new ArrayList<>();
        
        for (String str: intStrs) {
            int subInt = Integer.parseInt(str.substring(s, s + l));
            if (subInt > k) {
                result.add(subInt);
            }
        }
        
        return result.stream().mapToInt(i -> i).toArray();
    }
}