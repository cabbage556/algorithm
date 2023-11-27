import java.util.List;
import java.util.ArrayList;

class Solution {
    public int[] solution(int n, int k) {
        List<Integer> result = new ArrayList<>();
        
        for (int i = k; i <= n; i += k) {
            result.add(i);
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}