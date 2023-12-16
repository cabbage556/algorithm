import java.util.*;

class Solution {
    static int[] supo1 = {1, 2, 3, 4, 5};
    static int[] supo2 = {2, 1, 2, 3, 2, 4, 2, 5};
    static int[] supo3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    
    public int[] solution(int[] answers) {
        int[] corrects = new int[3];
        
        for (int i = 0; i < answers.length; i++) {
            int guess1 = supo1[i % supo1.length];
            int guess2 = supo2[i % supo2.length];
            int guess3 = supo3[i % supo3.length];
            int answer = answers[i];
            
            if (guess1 == answer) {
                corrects[0]++;
            }
            if (guess2 == answer) {
                corrects[1]++;
            }
            if (guess3 == answer) {
                corrects[2]++;
            }
        }
        
        int max = Arrays.stream(corrects).max().getAsInt();
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < corrects.length; i++) {
            if (max == corrects[i]) {
                list.add(i + 1);
            }
        }
        
        int[] result = new int[list.size()];
        int index = 0;
        for (int num : list) {
            result[index++] = num;
        }
        return result;
    }
}