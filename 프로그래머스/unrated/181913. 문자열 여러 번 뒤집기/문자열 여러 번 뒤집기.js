function solution(my_string, queries) {
    my_string = my_string.split('');
    
    queries.forEach(query => {
        const temp = my_string.slice(query[0], query[1] + 1);
        let j = 0;
        
        for (let i = query[1]; i >= query[0]; i--) {
            my_string[i] = temp[0 + j];
            j++;
        }
    })
    
    return my_string.join('');
}