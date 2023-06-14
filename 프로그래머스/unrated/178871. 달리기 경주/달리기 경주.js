function solution(players, callings) {
    const playerIndexObj = {};
    
    players.forEach((player, i) => {
        playerIndexObj[player] = i;
    });
    
    callings.forEach(calling => {
        const calledPlayerIndex = playerIndexObj[calling];
        
        // 추월
        let temp = players[calledPlayerIndex - 1];
        players[calledPlayerIndex - 1] = players[calledPlayerIndex];
        players[calledPlayerIndex] = temp;
        
        // 인덱스 업데이트
        playerIndexObj[calling] = calledPlayerIndex - 1;
        playerIndexObj[temp] = calledPlayerIndex;
    });
    
    return players;
}