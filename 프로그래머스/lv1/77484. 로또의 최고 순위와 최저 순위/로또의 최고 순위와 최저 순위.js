function solution(lottos, win_nums) {
    win_nums.sort((a, b) => a > b ? 1 : -1);
    
    const ranking = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    };
    const matchingNums = win_nums.filter(num => lottos.includes(num));
    let zeros = 0;
    lottos.forEach(num => {
        if (num === 0) {
            zeros++;
        }
    });
    
    return [ranking[zeros + matchingNums.length], ranking[matchingNums.length]];
}