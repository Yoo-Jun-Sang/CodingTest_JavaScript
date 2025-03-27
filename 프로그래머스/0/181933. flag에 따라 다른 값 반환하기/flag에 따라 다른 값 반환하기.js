function solution(a, b, flag) {
    let result = 0;
    if (flag === true) {
        result = a + b;
        return result;
    } else {
        result = a - b;
        return result;
    }
}