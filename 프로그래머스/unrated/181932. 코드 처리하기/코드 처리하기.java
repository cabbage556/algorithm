class Solution {
    public String solution(String code) {
        String ret = "";
        int mode = 0;
        
        for (int i = 0; i < code.length(); i++) {
            char ch = code.charAt(i);
            
            if (mode == 0) {
                if (ch == '1') {
                    mode = 1;
                } else if (i % 2 == 0) {
                    ret += ch;
                }
            } else {
                if (ch == '1') {
                    mode = 0;
                } else if (i % 2 == 1) {
                    ret += ch;
                }
            }
        }
        
        if (ret.length() == 0) {
            return "EMPTY";
        }
        
        return ret;
    }
}