class Solution {
    public int[] solution(int[] arr) {
        int pow = 0;
        while (true) {
            if (Math.pow(2, pow) >= arr.length) {
                break;
            }
            
            pow++;
        }
        
        if (Math.pow(2, pow) == arr.length) {
            return arr;
        }
        
        int[] result = new int[(int) Math.pow(2, pow)];
        for (int i = 0; i < arr.length; i++) {
            result[i] = arr[i];
        }
        
        return result;
    }
}