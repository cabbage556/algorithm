import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < flag.length; i++) {
            boolean canAdd = flag[i];
            
            if (canAdd) {
                for (int j = 0; j < arr[i]; j++) {
                    result.add(arr[i]);
                    result.add(arr[i]);
                }
            } else {
                for (int j = 0; j < arr[i]; j++) {
                    result.remove(result.size() - 1);
                }
            }
        }
        
        return result.stream().mapToInt(i -> i).toArray();
    }
}