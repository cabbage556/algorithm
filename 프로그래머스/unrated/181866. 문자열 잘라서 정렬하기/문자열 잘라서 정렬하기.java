import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

class Solution {
    public String[] solution(String myString) {
        List<String> list = new ArrayList(Arrays.asList(myString.split("x")));
        return list.stream().filter(str -> !str.equals("")).sorted().toArray(String[]::new);
    }
}