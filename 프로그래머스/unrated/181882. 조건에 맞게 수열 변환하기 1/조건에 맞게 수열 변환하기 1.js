function solution(arr) {
    return arr.map((el, i) => {
        if (el >= 50 && el % 2 === 0) {
            return el / 2;
        } else if (el < 50 && el % 2 === 1) {
            return el * 2;
        } else {
            return el;
        }
    });
}