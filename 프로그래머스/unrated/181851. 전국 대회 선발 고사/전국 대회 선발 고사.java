import java.util.*;

class Solution {
    public int solution(int[] rank, boolean[] attendance) {
        HashMap<Integer, Integer> map = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < rank.length; i++) {
            if (attendance[i]) {
                result.add(rank[i]);
                map.put(rank[i], i);
            }
        }
        
        Collections.sort(result);
        
        return 10000 * map.get(result.get(0)) + 100 * map.get(result.get(1)) + map.get(result.get(2));
    }
}