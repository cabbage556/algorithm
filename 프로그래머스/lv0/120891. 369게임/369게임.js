function solution(order) {
    order = (order + '')
                .split('')
                .filter(el => { 
                    return (el * 1) % 3 === 0 && (el * 1) !== 0;
                });
    return order.length;
}