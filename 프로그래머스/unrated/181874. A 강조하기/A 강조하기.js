function solution(myString) {
    return myString
            .replaceAll(/[^a]/g, (match) => match.toLowerCase())
            .replaceAll(/a/g, (match) => match.toUpperCase());
}