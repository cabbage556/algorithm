function solution(today, terms, privacies) {
    const answer = [];
    
    for (let i = 0; i < privacies.length; i++) {
        const [collectionDate, privacyTerm] = privacies[i].split(' ');
        let [expirationDateYYYY, expirationDateMM, expirationDateDD] = collectionDate.split('.').map(Number);
        
        for (let j = 0; j < terms.length; j++) {
            const term = terms[j].split(' '); // ['약관종류', '유효기간']
            
            if (term[0] === privacyTerm) {
                expirationDateYYYY += Math.floor(Number(term[1]) / 12);
                expirationDateMM += Number(term[1]) % 12;
                expirationDateDD -= 1;
            }
        }
        
        if (expirationDateMM > 12) {
            expirationDateMM -= 12;
            expirationDateYYYY += 1;
        }
        
        if (expirationDateDD < 1) {
            expirationDateDD = 28;
            expirationDateMM -= 1;
        }

        const [todayYYYY, todayMM, todayDD] = today.split('.').map(Number);
        if (todayYYYY > expirationDateYYYY) {
            answer.push(i + 1);
            continue;
        } else if (todayYYYY === expirationDateYYYY && todayMM > expirationDateMM) {
            answer.push(i + 1);
            continue;
        } else if (todayYYYY === expirationDateYYYY && todayMM === expirationDateMM && todayDD > expirationDateDD) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}