class Solution {
    public int[] solution(int[] num_list) {
        int[] result = new int[num_list.length];
        int left = 0;
        int right = num_list.length - 1;
        
        while (left <= num_list.length - 1) {
            result[left++] = num_list[right--];
        }
        
        return result;
    }
}