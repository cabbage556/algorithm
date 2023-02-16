function solution(my_string) {
    my_string = my_string.split('');
  
    const answer = my_string.filter((str, i) => {
        return my_string.indexOf(str) === i;
    }).reduce((acc, cur) => acc + cur, '');

    return answer;
}