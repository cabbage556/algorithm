function solution(numlist, n) {
    numlist = numlist
                .map(num => [Math.abs(n - num), num])
                .sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
    return numlist.map(num => num[1]);
}