import java.util.*;

class Solution {
    public int[] solution(int l, int r) {
        List<Integer> result = new ArrayList<>();
        
        l = l % 5 == 0 ? l : l + (5 - (l % 5));
        
        for (int i = l; i <= r; i += 5) {
            String str = Integer.toString(i);
            boolean onlyZeroAndFive = true;
            
            for (int j = 0; j < str.length(); j++) {
                if (str.charAt(j) != '5' && str.charAt(j) != '0') {
                    onlyZeroAndFive = false;
                    break;
                }
            }
            
            if (onlyZeroAndFive) {
                result.add(i);
            }
        }
        
        if (result.size() == 0) {
            return new int[] {-1};
        }
        
        return result.stream().mapToInt(i -> i).toArray();
    }
}