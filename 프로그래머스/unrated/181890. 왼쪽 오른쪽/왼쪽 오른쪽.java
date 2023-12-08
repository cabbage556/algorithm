import java.util.Arrays;

class Solution {
    public String[] solution(String[] str_list) {
        int index = 0;
        boolean rComesFirst = false;
        
        for (int i = 0; i < str_list.length; i++) {
            String str = str_list[i];
            if (str.equals("l")) {
                index = i;
                break;
            } else if (str.equals("r")) {
                index = i;
                rComesFirst = true;
                break;
            }
        }
        
        if (rComesFirst) {
            return Arrays.copyOfRange(str_list, index + 1, str_list.length);
        }
        return Arrays.copyOfRange(str_list, 0, index);
    }
}