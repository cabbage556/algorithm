import java.util.Stack;

class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        Stack<Integer> result = new Stack<>();
        
        for (int i = 0; i < flag.length; i++) {
            boolean canAdd = flag[i];
            
            if (canAdd) {
                for (int j = 0; j < arr[i]; j++) {
                    result.push(arr[i]);
                    result.push(arr[i]);
                }
            } else {
                for (int j = 0; j < arr[i]; j++) {
                    result.pop();
                }
            }
        }
        
        return result.stream().mapToInt(i -> i).toArray();
    }
}