function solution(n, k) {
    const mul = [];
    let div = Math.floor(n / k);
    
    for(i = 0; i < div; i++) {
        mul[i] =  k * (i+1); 
    }
    
    return mul;
}