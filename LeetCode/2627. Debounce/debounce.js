/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    const memo = []; // 실행 정보를 담는 배열

    return function (...args) {
        // 가장 최근에 실행한 함수가 아직 실행되기 전에 실행되면 이전 실행 취소
        if (memo.length > 0 && memo[memo.length - 1].delay > Date.now()) {
            clearTimeout(memo[memo.length - 1].timeoutId);
        }

        // t 밀리초 이후 실행
        const timeoutId = setTimeout(() => fn(...args), t);

        // 실행 정보 저장
        memo.push({ timeoutId, delay: Date.now() + t });
    };
};

const log = debounce(console.log, 100);
log("Hello");
log("Hello");
log("Hello");
