import java.util.Arrays;

class Solution {
    public String[] solution(String my_string) {
        String[] splitted = my_string.split(" ");
        return Arrays.stream(splitted).filter(item -> !item.equals("")).toArray(String[]::new);
    }
}