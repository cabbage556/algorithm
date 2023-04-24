function solution(my_string, is_prefix) {
    if (my_string.length < is_prefix.length) {
        return 0;
    }
    
    let sum = '';
    for (let i = 0; i < my_string.length; i++) {
        sum += my_string[i];
        
        if (sum === is_prefix) {
            return 1;
        }
    }
    return 0;
}