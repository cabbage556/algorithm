class Solution {
    public String solution(String my_string, int[][] queries) {
        String[] split = my_string.split("");
        
        for (int[] query : queries) {
            int s = query[0], e = query[1], j = 0;
            for (int i = s; i <= (s + e) / 2; i++) {
                String temp = split[i];
                split[i] = split[e - j];
                split[e - j] = temp;
                j++;
            }
        }
        
        return String.join("", split);
    }
}