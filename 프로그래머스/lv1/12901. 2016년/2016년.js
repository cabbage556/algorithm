function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daySum = 0;
    
    for (let i = 0; i < a - 1; i++)
        daySum += month[i];
    daySum += b;
    
    if (daySum % 7 === 0) return "THU";
    else if (daySum % 7 === 1) return "FRI";
    else if (daySum % 7 === 2) return "SAT";
    else if (daySum % 7 === 3) return "SUN";
    else if (daySum % 7 === 4) return "MON";
    else if (daySum % 7 === 5) return "TUE";
    else if (daySum % 7 === 6) return "WED";
}