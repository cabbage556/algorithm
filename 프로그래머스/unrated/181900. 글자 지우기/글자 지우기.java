import java.util.Hashtable;

class Solution {
    public String solution(String my_string, int[] indices) {
        String answer = "";
        
        Hashtable<Integer, Integer> hash = new Hashtable<Integer, Integer>(indices.length);
        for (int index : indices) {
            hash.put(index, index);
        }
        
        for (int i = 0; i < my_string.length(); i++) {
            if (hash.containsKey(i)) {
                continue;
            }
            
            answer += Character.toString(my_string.charAt(i));
        }
        
        return answer;
    }
}