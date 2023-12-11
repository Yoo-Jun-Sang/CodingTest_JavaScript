function solution(n) {
    let sum1 = 0;
    let sum2 = 0;
    
    if(n % 2 === 0) {
        for(let i = 2; i < n+1; i++) {
            if(i % 2 === 0) {
                sum1 = sum1 + i * i;
            }
        }
        return sum1;
    }
    
    else {
         for(let i = 1; i < n+1; i++) {
            if(i % 2 === 1) {
                sum2 = sum2 + i
            }
         }
         return sum2;
    }
}