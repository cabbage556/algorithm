import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        List<Integer> result = new ArrayList<>();
        
        for (int[] query : queries) {
            int s = query[0], e = query[1], k = query[2];
            int min = 1000001;
            int[] copy = Arrays.copyOfRange(arr, s, e + 1);
            int[] filter = Arrays.stream(copy).filter(num -> num > k).toArray();
            
            for (int num : filter) {
                if (min > num) {
                    min = num;
                }
            }
            
            if (min == 1000001) {
                result.add(-1);
            } else {
                result.add(min);
            }
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}