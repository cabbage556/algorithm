function solution(wallpaper) {
    // (lux, luy) -> (rdx, rdy)
    
    let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') { // 파일인 경우
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i);
                rdy = Math.max(rdy, j);
            }
        }
    }
    
    return [lux, luy, rdx + 1, rdy + 1];
}