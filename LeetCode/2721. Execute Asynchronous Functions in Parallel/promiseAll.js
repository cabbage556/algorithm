/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const results = []; // resolve된 결과를 저장할 배열
        let count = functions.length;

        functions.forEach(async (fn, i) => {
            try {
                const result = await fn(); // Promise를 리턴하는 함수 실행
                results[i] = result; // fn 실행 결과가 resolve되면 resolve 값으로 대체
                count--;

                if (count === 0) {
                    resolve(results); // 모든 fn 실행 결과가 resolve되는 경우 results 배열 resolve
                }
            } catch (err) {
                reject(err); // fn 실행이 reject되면 reject된 이유와 함께 reject
            }
        });
    });
};

promiseAll([() => new Promise((resolve) => setTimeout(() => resolve(5), 1000))])
    .then(console.log)
    .catch(console.log);

promiseAll([
    () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => reject("Error"), 100)
        ),
])
    .then(console.log)
    .catch(console.log);

promiseAll([
    () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
    () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
    () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
])
    .then(console.log)
    .catch(console.log);
