class Solution {
    public String solution(String my_string, int k) {
        String str = my_string;
        for (int i = 1; i < k; i++) {
            my_string += str;
        }
        return my_string;
    }
}