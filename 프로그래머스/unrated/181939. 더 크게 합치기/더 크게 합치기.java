class Solution {
    public int solution(int a, int b) {
        int aPlusB = Integer.parseInt(String.valueOf(a) + String.valueOf(b));
        int bPlusA = Integer.parseInt(String.valueOf(b) + String.valueOf(a));
        
        return aPlusB >= bPlusA ? aPlusB : bPlusA;
    }
}