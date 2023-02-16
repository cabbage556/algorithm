function solution(n ,arr1, arr2) {
//     const answer = [];

//     function getBinaryArr(arr) {
//         const tempArr = [];

//         for (let el of arr) {
//           const temp = [];

//           while (el > 0) {
//             temp.unshift((el % 2) + '');
//             el = Math.floor(el / 2);
//           }
//           tempArr.push(temp.join('').padStart(n, '0'));
//         }

//         return tempArr;
//     }
//     const binary1 = getBinaryArr(arr1);
//     const binary2 = getBinaryArr(arr2);

//     // console.log(binary1, binary2);

//     for (let i = 0; i < binary1.length; i++) {
//         let temp = "";
//         for (let j = 0; j < binary1[i].length; j++) {
//           if (binary1[i][j] * 1 + binary2[i][j] * 1 === 0) temp += " ";
//           else temp += "#";
//         }
//         answer.push(temp);
//     }
//     return answer;
    
    // 수업 풀이
//     const answer = [];
    
//     // 두 배열의 길이가 같기 때문에 하나의 반복문 안에서 해결 가능
//     for (let i = 0; i < arr1.length; i++) {
//         answer[i] = ''; // undefined가 되지 않도록 빈문자열 할당
        
//         // 지도1, 2의 암호를 2진법으로 변환
//         const map1 = arr1[i].toString(2).padStart(n, '0'); // 길이 n까지 '0'으로 채우기
//         const map2 = arr2[i].toString(2).padStart(n, '0');
        
//         for (let j = 0; j < map1.length; j++) {
//             // 벽이 되는 경우
//             if (map1[j] === '1' || map2[j] === '1')
//                 answer[i] += '#';
//             // 공백이 되는 경우
//             else
//                 answer[i] += ' ';
//         }
//     }
    
//     return answer;
    
    // 수업 풀이
    const answer = arr1.map((map1, i) => {
        // 지도1, 2를 2진법으로 변환
        map1 = map1.toString(2).padStart(n, '0');
        const map2 = arr2[i].toString(2).padStart(n, '0');
        
        return map1.split('').reduce((acc, cur, j) => {
            return acc + (cur === '1' || map2[j] === '1'
                            ? '#'
                            : ' '
                        );
        }, '');
    });
    return answer;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}