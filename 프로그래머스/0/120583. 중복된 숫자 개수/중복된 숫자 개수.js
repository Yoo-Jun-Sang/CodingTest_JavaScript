function solution(array, n) {
    let result = 0;
    
    array.forEach((e) => {
        if(e === n) {
            result ++;
        }
    })
    
    return result;
}