function solution(number, k) {
    const stack = [];

    for (let i = 0; i < number.length; i++) {
        // k개의 수를 제거
        // 현재 숫자가 스택의 최상단 숫자보다 크면 스택에서 팝하면서 k개의 수 중에서 1개 제거
        while (k > 0 && number[i] > stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        
        // 현재 숫자가 스택의 최상단 숫자보다 작으면 스택에 푸쉬
        stack.push(number[i]);
    }

    // 앞의 숫자가 뒤에 숫자보다 작은 경우가 없는 경우 앞에서부터 잘라서 join
    return stack.slice(0, stack.length - k).join("");
}