class Solution {
    public int solution(String number) {
        int sum = 0;
        
        for (String numStr: number.split("")) {
            sum += Integer.parseInt(numStr);
        }
        
        return sum % 9;
    }
}