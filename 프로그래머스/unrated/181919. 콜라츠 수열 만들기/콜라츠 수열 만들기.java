import java.util.List;
import java.util.ArrayList;

class Solution {
    public int[] solution(int n) {
        List<Integer> collatz = new ArrayList<>();
        collatz.add(n);
        
        while (n != 1) {
            if (n % 2 == 0) {
                n /= 2;
            } else {
                n = 3 * n + 1;
            }
            collatz.add(n);
        }
        
        return collatz.stream().mapToInt(i -> i).toArray();
    }
}