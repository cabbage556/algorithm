function solution(a, b) {
    // 2016년 월별 일수
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daySum = 0;
    
    // 5월이면 4월까지의 일수를 더한다.
    for (let i = 0; i < a - 1; i++)
        daySum += month[i];
    // 5월의 일수를 더한다.
    daySum += b;
    
    // 5월 24일이 화요일인데, 5월 24일의 모든 일수를 7로 나누면 5가 남는다.
    if (daySum % 7 === 0) return "THU";
    else if (daySum % 7 === 1) return "FRI";
    else if (daySum % 7 === 2) return "SAT";
    else if (daySum % 7 === 3) return "SUN";
    else if (daySum % 7 === 4) return "MON";
    else if (daySum % 7 === 5) return "TUE";
    else if (daySum % 7 === 6) return "WED";
}