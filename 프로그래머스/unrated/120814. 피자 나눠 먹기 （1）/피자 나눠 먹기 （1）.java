class Solution {
    public int solution(int n) {
        int result = n / 7;
        return n % 7 != 0 ? ++result : result;
    }
}