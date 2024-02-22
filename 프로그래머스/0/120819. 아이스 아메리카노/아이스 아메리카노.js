function solution(money) {
    let result = [];
    result[0] = Math.floor(money / 5500);
    result[1] = money - 5500 * result[0];
    return result;
}