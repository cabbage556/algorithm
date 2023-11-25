class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] arr = new int[num_list.length - n + 1];
        int arrIdx = 0;
        for (int i = n - 1; i < num_list.length; i++) {
            arr[arrIdx++] = num_list[i];
        }
        
        return arr;
    }
}