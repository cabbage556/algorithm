function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    num_list.forEach((el, i) => {
        i % 2 === 0 ? odd += el : even += el;
    })
    
    return odd > even ? odd : even;
}