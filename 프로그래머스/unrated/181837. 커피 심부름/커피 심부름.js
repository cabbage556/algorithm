function solution(order) {
    let answer = 0;
    
    order.forEach(_order => {
        if (_order.includes('americano') || _order === 'anything') {
            answer += 4500;
        } else {
            answer += 5000;
        }
    });
    
    return answer;
}