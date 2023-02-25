function solution(polynomial) {
    let answer = '';
    polynomial = polynomial.split(' + ');
    
    let numX = 0;
    let constant = 0;
    for (let i = 0; i < polynomial.length; i++) {
        
        if (polynomial[i].includes('x')) {
          if (polynomial[i].split('x')[0] !== 'x' && polynomial[i].split('x')[0] !== '') {
            numX += polynomial[i].split('x')[0] * 1;
          } else if (polynomial[i].split('x')[0] === '') {
            numX++;
          }
        } else {
            constant += polynomial[i] * 1;
        }
    }
    
    if (numX !== 0) {
        if (numX === 1) {
            answer += 'x'
        } else {
            answer += `${numX}x`
        }
    
        if (constant !== 0) {
            answer += ` + ${constant}`;
        }
    } else {
        if (constant === 0) {
            answer = '0';
        } else {
            answer += constant;
        }
     }
    
    return answer;
}