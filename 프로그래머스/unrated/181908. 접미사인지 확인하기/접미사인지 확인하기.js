function solution(my_string, is_suffix) {
    if (is_suffix.length > my_string.length) {
        return 0;
    }
    
    for (let i = my_string.length - 1; i >= 0; i--) {
        if (my_string.slice(i) === is_suffix) {
            return 1;
        }
    }
    return 0;
}