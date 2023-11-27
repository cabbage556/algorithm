import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        Arrays.sort(num_list);
        
        int[] slice = new int[num_list.length - 5];
        int sliceIdx = 0;
        for (int i = 5; i < num_list.length; i++) {
            slice[sliceIdx++] = num_list[i];
        }
        return slice;
    }
}