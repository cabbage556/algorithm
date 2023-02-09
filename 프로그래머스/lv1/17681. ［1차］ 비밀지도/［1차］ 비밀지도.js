function solution(n ,arr1, arr2) {
    const answer = [];

    function getBinaryArr(arr) {
        const tempArr = [];

        for (let el of arr) {
          const temp = [];

          while (el > 0) {
            temp.unshift((el % 2) + '');
            el = Math.floor(el / 2);
          }
          tempArr.push(temp.join('').padStart(n, '0'));
        }

        return tempArr;
    }
    const binary1 = getBinaryArr(arr1);
    const binary2 = getBinaryArr(arr2);

    // console.log(binary1, binary2);

    for (let i = 0; i < binary1.length; i++) {
        let temp = "";
        for (let j = 0; j < binary1[i].length; j++) {
          if (binary1[i][j] * 1 + binary2[i][j] * 1 === 0) temp += " ";
          else temp += "#";
        }
        answer.push(temp);
    }
    return answer;
}