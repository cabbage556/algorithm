import java.util.*;

class Solution {
    public int solution(int a, int b, int c, int d) {
        int[] dices = {a, b, c, d};
        Arrays.sort(dices);
        
        // 네 주사위 숫자 모두 같은 경우
        if (dices[0] == dices[3]) {
            return 1111 * dices[0];
        }
        
        // 세 주사위가 같고, 나머지 다른 주사위 숫자가 다른 경우
        if (dices[0] == dices[1] && dices[1] == dices[2]) {
            // 나머지 다른 주사위: dices[3]
            return (int) Math.pow(10 * dices[0] + dices[3], 2);
        } else if (dices[1] == dices[2] && dices[2] == dices[3]) {
            // 나머지 다른 주사위: dices[0]
            return (int) Math.pow(10 * dices[1] + dices[0], 2);
        }
        
        // 주사위가 두 개씩 같은 경우
        if (dices[0] == dices[1] && dices[2] == dices[3]) {
            return (dices[0] + dices[2]) * Math.abs(dices[0] - dices[2]);
        }
        
        // 두 주사위가 같고 나머지 두 주사위가 다른 경우
        if (dices[0] == dices[1]) {
            return dices[2] * dices[3];
        } else if (dices[1] == dices[2]) {
            return dices[0] * dices[3];
        } else if (dices[2] == dices[3]) {
            return dices[0] * dices[1];
        }
            
        // 네 주사위가 모두 다른 경우
        return dices[0];
    }
}