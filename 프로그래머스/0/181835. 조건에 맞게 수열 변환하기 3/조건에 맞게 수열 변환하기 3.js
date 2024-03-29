function solution(arr, k) {
    if(k % 2 === 1) {
        return  arr.map((item) => {return item * k});
    } else {
        return arr.map((item) => {return item + k});
    }
}