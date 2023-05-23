function solution(X, Y) {
    const answer = [];
    const shorter = X.length < Y.length ? X : Y;
    const longer = X.length >= Y.length ? X : Y;
    const shorterObj = {};
    const longerObj = {};
    
    for (const char of shorter) {
        shorterObj[char] = shorterObj[char] || 0;
        shorterObj[char]++;
    }
    
    for (const char of longer) {
        longerObj[char] = longerObj[char] || 0;
        longerObj[char]++;
    }
    
    for (const key in shorterObj) {
        if (!longerObj[key]) {
            continue;
        }
        
        const smallOrEqaul = shorterObj[key] >= longerObj[key] ? longerObj[key] : shorterObj[key];
        for (let i = 0; i < smallOrEqaul; i++) {
            answer.push(key);
        }
    }
    
    if (answer.length === 0) {
        return '-1';
    }
    
    const temp = answer.map(Number).sort((a, b) => b - a).join('');
    if (Number(temp) === 0) {
        return '0';
    } else {
        return temp;
    }
}