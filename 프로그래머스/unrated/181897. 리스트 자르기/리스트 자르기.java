import java.util.Arrays;

class Solution {
    public int[] solution(int n, int[] slicer, int[] num_list) {
        if (n == 1) {
            int b = slicer[1];
            return Arrays.copyOfRange(num_list, 0, b + 1);
        }
        
        if (n == 2) {
            int a = slicer[0];
            return Arrays.copyOfRange(num_list, a, num_list.length);
        }
        
        if (n == 3) {
            int a = slicer[0];
            int b = slicer[1];
            return Arrays.copyOfRange(num_list, a, b + 1);
        }
        
        int a = slicer[0];
        int b = slicer[1];
        int c = slicer[2];
        int length = (b - a) / 2 + 1;
        int[] slice = new int[length];
        int idx = 0;
        for (int i = a; i <= b; i += c) {
            slice[idx++] = num_list[i];
        }
        
        return slice;
    }
}