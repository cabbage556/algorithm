class Solution {
    public int solution(String[] order) {
        int result = 0;
        
        for (String cafe : order) {
            if (cafe.contains("americano")) {
                result += 4500;
            } else if (cafe.contains("cafelatte")) {
                result += 5000;
            } else {
                result += 4500;
            }
        }
        
        return result;
    }
}