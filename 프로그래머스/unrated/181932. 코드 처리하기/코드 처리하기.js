function solution(code) {
    let mode = false;
    let ret = '';
    
    for (let i = 0; i < code.length; i++) {
        if (!mode) {
            if (code[i] === '1') {
                mode = !mode;
                continue;
            }
            
            if (i % 2 === 0) {
                ret += code[i];
            }
        } else {
            if (code[i] === '1') {
                mode = !mode;
                continue;
            }
            
            if (i % 2 === 1) {
                ret += code[i];
            }
        }
    }
    
    return ret.length === 0 ? 'EMPTY' : ret;
}