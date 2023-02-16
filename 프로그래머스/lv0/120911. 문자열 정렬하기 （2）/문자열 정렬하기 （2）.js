function solution(my_string) {
    my_string = my_string
                    .toLowerCase()
                    .split('')
                    .sort()
                    .join('');
    return my_string;
}