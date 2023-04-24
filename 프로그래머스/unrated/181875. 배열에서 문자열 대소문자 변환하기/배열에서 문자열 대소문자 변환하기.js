function solution(strArr) {
    return strArr.map((el, i) => {
        return i % 2 === 0 ? el.toLowerCase() : el.toUpperCase();
    });
}