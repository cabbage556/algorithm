class Solution {
    public int[] solution(int money) {
        int count = money / 5500;
        int left = money % 5500;
        return new int[]{count, left};
    }
}