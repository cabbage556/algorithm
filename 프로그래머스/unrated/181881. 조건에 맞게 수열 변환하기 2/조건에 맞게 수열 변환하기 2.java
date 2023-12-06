import java.util.Arrays;

class Solution {
    public int solution(int[] arr) {
        int[] transform = Arrays.copyOfRange(arr, 0, arr.length);
        int count = 0;
        
        while (true) {
            for (int i = 0; i < arr.length; i++) {
                int num = arr[i];
                boolean isEven = num % 2 == 0;
                
                if (num >= 50 && isEven) {
                    num /= 2;
                } else if (num < 50 && !isEven) {
                    num *= 2;
                    num++;
                }
                arr[i] = num;
            }
            
            boolean stop = true;
            for (int i = 0; i < arr.length; i++) {
                if (transform[i] != arr[i]) {
                    stop = false;
                    break;
                }
            }
            
            if (stop) {
                return count;
            }
            
            transform = Arrays.copyOfRange(arr, 0, arr.length);
            
            count++;
        }
    }
}