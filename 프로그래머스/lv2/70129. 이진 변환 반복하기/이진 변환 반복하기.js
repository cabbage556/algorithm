function solution(s) {
    let zero = 0;
    let binary = 0;
    
    while (s !== '1') {
        let noZero = "";
        
        for (const str of s) {
            if (str === '1') noZero += str;
            else zero++;
        }
        s = noZero.length;
        noZero = '';
        
        while (s > 0) {
            noZero += s % 2;
            s = Math.floor(s / 2);
        }
        noZero = noZero.split("").reverse("").join("");
        s = noZero;
        binary++;
    }
    
    return [binary, zero];
}