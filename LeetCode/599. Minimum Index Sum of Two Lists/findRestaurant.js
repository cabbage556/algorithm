/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const hashMap1 = new Map();
  const hashMap2 = new Map();

  // 문자열(키) - 인덱스(값) 맵핑
  list1.forEach((str, i) => hashMap1.set(str, i));
  list2.forEach((str, i) => hashMap2.set(str, i));

  // 두 인덱스의 합이 1998을 넘지 않으므로 최솟값을 우선 2000으로 설정
  let min = 2000;
  hashMap1.forEach((value, key) => {
    const indexSum = value + hashMap2.get(key);
    if (!Number.isNaN(indexSum)) {
      // 해시 맵에 맵핑된 두 인덱스의 합의 최소를 구함
      min = Math.min(min, indexSum);
    }
  });

  const result = [];
  hashMap1.forEach((value, key) => {
    const indexSum = value + hashMap2.get(key);

    // 두 인덱스의 합의 최소와 두 인덱스의 합이 같다면 결과에 추가
    if (indexSum === min) {
      result.push(key);
    }
  });
  return result;
};
