class Solution {
    public int[] solution(int[] arr, int n) {
        boolean isEven = arr.length % 2 == 0;
        int firstIndex = isEven ? 1 : 0;
        
        for (int i = firstIndex; i < arr.length; i += 2) {
            arr[i] += n;
        }
        
        return arr;
    }
}