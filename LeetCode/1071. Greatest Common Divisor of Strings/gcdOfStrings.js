/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    // return the largest string x such that x divides both str1 and str2
    // t divides s => s = t + ... + t (t is concatenated with itself one or more times)
    let gcd = "";
    const gcds = [];
    const shorterString = str1.length > str2.length ? str2 : str1;

    for (let i = 0; i < shorterString.length; i++) {
        gcd = shorterString.slice(0, i + 1);

        if (shorterString.length % gcd.length !== 0) {
            continue;
        }

        if (
            gcd.repeat(str1.length / gcd.length) === str1 &&
            gcd.repeat(str2.length / gcd.length) === str2
        ) {
            gcds.push(gcd);
        }
    }

    return gcds.length === 0 ? "" : gcds.at(-1);
};

// console.log(gcdOfStrings("ABCABC", "ABC"));
// console.log(gcdOfStrings("ABABAB", "ABAB"));
// console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABABABAB", "ABAB"));
