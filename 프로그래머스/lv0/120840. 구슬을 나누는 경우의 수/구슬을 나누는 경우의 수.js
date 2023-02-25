function solution(balls, share) {
    function factorial(n) {
        if (n === 1)
            return BigInt(1);
        else if (n === 0)
            return BigInt(0);
        
        return BigInt(n) * factorial(n - 1);
    }
    
    if (balls === share) {
        return 1;
    }
  
    const ballsMinusShare = factorial(balls - share);
    balls = factorial(balls);
    share = factorial(share);
  
    return (balls / (ballsMinusShare * share)).toString() * 1;
}