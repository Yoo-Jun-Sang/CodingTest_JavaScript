function solution(array) {
    let middle = Math.floor(array.length / 2) + 1 ;
    let sortArray = array.sort((a, b) => a - b);
    return sortArray[middle-1];
}