import java.util.*;

class Solution {
    public int[] solution(int[] arr, int k) {
        Set<Integer> set = new HashSet<>();
        int[] result = new int[k];
        Arrays.fill(result, -1);
        
        int i = 0;
        for (int num : arr) {
            if (i >= k) {
                return result;
            }
            
            if (!set.contains(num)) {
                result[i++] = num;
                set.add(num);
            }
        }
        
        return result;
    }
}