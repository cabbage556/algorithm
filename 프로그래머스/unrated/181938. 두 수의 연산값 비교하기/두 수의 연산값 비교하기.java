class Solution {
    public int solution(int a, int b) {
        int plus = Integer.parseInt(String.valueOf(a) + String.valueOf(b));
        int multi = 2 * a * b;
        
        return plus > multi ? plus : multi;
    }
}