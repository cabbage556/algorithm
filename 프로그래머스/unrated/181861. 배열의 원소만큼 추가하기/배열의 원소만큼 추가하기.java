import java.util.List;
import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr) {
        List<Integer> result = new ArrayList<>();
        
        for (int number : arr) {
            for (int count = 0; count < number; count++) {
                result.add(number);
            }
        }
        
        return result.stream().mapToInt(i -> i).toArray();
    }
}