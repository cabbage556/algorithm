import java.util.Stack;

class Solution {
    public String solution(String my_string, int s, int e) {
        String answer = "";
        Stack<Character> stack = new Stack<>();
        
        for (int i = s; i <= e; i++) {
            stack.push(my_string.charAt(i));
        }
        
        for (int i = 0; i < my_string.length(); i++) {
            if (i >= s && i <= e) {
                answer += stack.pop();
            } else {
                answer += my_string.charAt(i);
            }
        }
        
        return answer;
    }
}