function solution(N, stages) {
    const fail = {};
    
    for (let stage = 1; stage <= N; stage++) {
        const failedPlayers = stages.filter(el => el === stage);
        const playersAfter = stages.filter(el => el > failedPlayers[0]);
        
        fail[stage] = 0;
        
        if (failedPlayers.length + playersAfter.length !== 0)
            fail[stage] = failedPlayers.length / (failedPlayers.length + playersAfter.length);
        else
            fail[stage] = 0;
        
        // console.log(failedPlayers, playersAfter, fail);
    }
    
    // 	{ '1': 0.125, '2': 0.42857142857142855, '3': 0.5, '4': 0.5, '5': 0 }
    const answer = Object.entries(fail)
                            .sort((a, b) => b[1] - a[1])
                            .map(el => el[0] * 1);
    return answer;
}