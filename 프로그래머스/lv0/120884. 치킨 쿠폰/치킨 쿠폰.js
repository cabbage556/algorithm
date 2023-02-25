function solution(chicken) {
    let coupon = chicken;  // 치킨 1마리당 쿠폰 1장
    let couponChicken = 0;
    
    while (coupon >= 10) {
        couponChicken += Math.trunc(coupon / 10);        // 쿠폰 10장당 서비스치킨 1마리
        coupon = Math.trunc(coupon / 10) + coupon % 10;  // 서비스치킨 1마리당 쿠폰 1장 + 이전에 남은 쿠폰
    }
    
    return couponChicken;
}