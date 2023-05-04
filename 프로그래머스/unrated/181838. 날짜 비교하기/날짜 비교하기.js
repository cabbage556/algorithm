function solution(date1, date2) {
    const [year1, month1, day1] = date1;
    const [year2, month2, day2] = date2;
    
    if (year1 === year2 && month1 === month2 && day1 === day2) {
        return 0;
    }
    
    if (year1 < year2) { // 년도가 앞서는 경우
        return 1;
    } else if (year1 > year2) { // 년도가 앞서지 않는 경우
        return 0;
    } else { // 년도가 같은 경우
        if (month1 < month2) { // 월이 앞서는 경우
            return 1;
        } else if (month1 > month2) { // 월이 앞서지 않는 경우
            return 0;
        } else { // 월이 같은 경우
            if (day1 < day2) { // 날짜가 앞서는 경우
                return 1;
            } else if (day1 > day2) { // 날짜가 앞서지 않는 경우
                return 0;
            } else { // 날짜가 같은 경우
                return 0;
            }
        }
    }
}