function solution(array, n) {
    array.push(n);
  array.sort((a, b) => a - b);
  const nIndex = array.indexOf(n);
  
  if (nIndex === 0)
    return array[nIndex + 1];
  else if (nIndex === array.length - 1)
    return array[nIndex - 1];
  
  const num1 = array[nIndex] - array[nIndex - 1];
  const num2 = array[nIndex + 1] - array[nIndex];
    
    if (num1 === num2)
        return array[nIndex - 1];
    else if (num1 > num2)
        return array[nIndex + 1];
    else
        return array[nIndex - 1];
}