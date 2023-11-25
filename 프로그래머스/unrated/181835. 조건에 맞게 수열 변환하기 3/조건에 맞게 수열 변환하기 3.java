class Solution {
    public int[] solution(int[] arr, int k) {
        boolean isEven = k % 2 == 0;
        for (int i = 0; i < arr.length; i++) {
            if (isEven) arr[i] += k;
            else arr[i] *= k;
        }
        return arr;
    }
}