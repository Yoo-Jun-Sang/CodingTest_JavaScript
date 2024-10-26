function solution(myString) {
    let result = "";
    let myStringToLowerCase = myString.toLowerCase();
    result = myStringToLowerCase.replace(/a/gi, "A");
    return result;
}