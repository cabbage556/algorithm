/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const joinedArray = [];
    const map = new Map(); // Map { id => obj }

    arr1.forEach((obj) => map.set(obj.id, obj)); // arr1 먼저 맵에 저장
    arr2.forEach((obj) => {
        const existingObj = map.get(obj.id); // arr2의 객체 id로 값 가져오기

        // 값이 있으면 덮어쓰기
        if (existingObj) {
            for (const key in obj) {
                existingObj[key] = obj[key];
            }
            map.set(obj.id, existingObj);
        }
        // 값이 없으면 넣기
        else {
            map.set(obj.id, obj);
        }
    });

    // 맵의 값으로 배열 생성 후 id 값 기준 오름차순 정렬하여 리턴
    map.forEach((obj, key) => joinedArray.push(obj));
    return joinedArray.sort((a, b) => a.id - b.id);
};

const arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
];
const arr2 = [{ id: 3, x: 5 }];
join(arr1, arr2);

const arr3 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
];
const arr4 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
];
join(arr3, arr4);

const arr5 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr6 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
join(arr5, arr6);

const arr7 = [
    { id: 1, x: 36, d: 26, f: 35 },
    { id: 3, c: 20, z: 75 },
];
const arr8 = [{ id: 2, o: 48, z: 84, y: 61 }];
console.log(join(arr7, arr8));
