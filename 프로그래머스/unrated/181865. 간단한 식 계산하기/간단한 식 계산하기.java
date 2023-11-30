class Solution {
    public int solution(String binomial) {
        String[] split = binomial.split(" ");
        
        if (split[1].equals("+")) {
            return Integer.parseInt(split[0]) + Integer.parseInt(split[2]);
        }
        if (split[1].equals("-")) {
            return Integer.parseInt(split[0]) - Integer.parseInt(split[2]);
        }
        
        return Integer.parseInt(split[0]) * Integer.parseInt(split[2]);
    }
}