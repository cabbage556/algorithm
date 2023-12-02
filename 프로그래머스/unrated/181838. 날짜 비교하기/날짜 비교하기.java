class Solution {
    public int solution(int[] date1, int[] date2) {
        int year1 = date1[0], month1 = date1[1], day1 = date1[2];
        int year2 = date2[0], month2 = date2[1], day2 = date2[2];
        
        if (year1 < year2) {
            return 1;
        }
        
        if (year1 > year2) {
            return 0;
        }
        
        // year1 == year2
        if (month1 < month2) {
            return 1;
        }
        if (month1 > month2) {
            return 0;
        }
        
        // month1 == month2
        if (day1 < day2) {
            return 1;
        } else {
            return 0;
        }
    }
}