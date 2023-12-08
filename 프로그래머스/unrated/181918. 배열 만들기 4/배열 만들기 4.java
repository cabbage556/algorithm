import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        List<Integer> stk = new ArrayList<>();
        int i = 0;
        
        while (i < arr.length) {
            int element = arr[i];
            
            if (stk.size() == 0) {
                stk.add(element);
                i++;
                continue;
            }
            
            int lastOne = stk.get(stk.size() - 1);
            if (lastOne < element) {
                stk.add(element);
                i++;
            } else {
                stk.remove(stk.size() - 1);
            }
        }
        
        return stk.stream().mapToInt(Integer::intValue).toArray();
    }
}