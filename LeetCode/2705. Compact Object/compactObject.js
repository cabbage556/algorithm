/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
    // obj: object or array
    // return: compact object

    function dfs(obj) {
        // falsy 값이면 false 리턴
        if (!obj) {
            return false;
        }
        // 객체나 배열이 아닌 값인 경우 그대로 리턴
        if (typeof obj !== "object") {
            return obj;
        }

        // 배열인 경우
        if (Array.isArray(obj)) {
            const newArr = [];
            for (let i = 0; i < obj.length; i++) {
                const subResult = dfs(obj[i]); // 배열 원소에 대해 dfs 재귀 호출

                if (subResult) {
                    newArr.push(subResult);
                }
            }

            return newArr;
        }

        // 객체인 경우
        const newObj = {};
        for (const key in obj) {
            const subResult = dfs(obj[key]); // 객체 키에 해당하는 값에 대해 dfs 재귀 호출
            if (subResult) {
                newObj[key] = subResult;
            }
        }

        return newObj;
    }

    return dfs(obj);
};

// const obj = [null, 0, false, 1];
// const obj = [null, 0, 5, [0], [false, 16]];
// const obj = { a: null, b: [false, 1] };
const obj = [0, 1, 0, [[[null, 0], false], false], false];
console.log(compactObject(obj));
