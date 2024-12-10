function solution(n) {
    let toString = String(n);
    let toArray = [...toString];
    let sum = 0;
    toArray.forEach((e) => sum = sum + Number(e));
    return sum;
}