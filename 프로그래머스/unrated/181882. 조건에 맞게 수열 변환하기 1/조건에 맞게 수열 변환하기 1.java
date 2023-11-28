class Solution {
    public int[] solution(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            boolean isEven = arr[i] % 2 == 0;
            boolean isLargerOrEqualToFifty = arr[i] >= 50;
            
            if (isEven && isLargerOrEqualToFifty) {
                arr[i] /= 2;
            } else if (!isEven && !isLargerOrEqualToFifty) {
                arr[i] *= 2;
            }
        }
        
        return arr;
    }
}