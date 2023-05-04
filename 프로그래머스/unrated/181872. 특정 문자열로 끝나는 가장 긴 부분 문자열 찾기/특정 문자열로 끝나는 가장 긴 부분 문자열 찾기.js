function solution(myString, pat) {
    const index = myString.indexOf(pat);
    const lastIndex = myString.lastIndexOf(pat);
    
    if (index === lastIndex) {
        return myString.slice(0, index + pat.length);
    } else if (index < lastIndex) {
        return myString.slice(0, lastIndex + pat.length);
    }
}