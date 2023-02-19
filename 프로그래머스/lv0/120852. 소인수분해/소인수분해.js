function solution(n) {
    const div = [];
  const answer = [];
  
  for (let i = 2; i <= n; i++) {
    if (n % i === 0)
      div.push(i);
  }
  
  for (let i = 0; i <= div.length; i++) {
    let temp = 0;
    for (let j = 1; j <= div[i]; j++) {
      if (div[i] % j === 0)
        temp++;
    }
    
    if (temp === 2)
      answer.push(div[i]);
  }
  
  return answer;
}