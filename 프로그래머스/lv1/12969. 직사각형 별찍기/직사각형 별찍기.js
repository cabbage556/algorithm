process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const arr = data.split(" ");
    const n = Number(arr[0]);
    const m = Number(arr[1]);
    
    let answer = '';
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            answer += '*';
        }
        answer += '\n';
    }
    console.log(answer);
});