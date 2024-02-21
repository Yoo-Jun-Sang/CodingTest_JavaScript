function solution(n) {
    let piz = Math.floor(n / 7)
    if(n % 7 === 0) {
        return piz;
    } else {
        return piz + 1;
    }
}